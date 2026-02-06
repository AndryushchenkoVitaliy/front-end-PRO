'use strict';

class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.maxClasses = 25;
        this.attendance = [];
        this.grades = [];     
    }

    undoLastAttendance() {
        if (this.attendance.length > 0) {
            this.attendance.pop();
            this.grades.pop();
        }
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    getAverageGrade() {
        const validGrades = this.grades.filter(g => g !== null);
        if (validGrades.length === 0) return 0;
        const sum = validGrades.reduce((a, b) => a + b, 0);
        return sum / validGrades.length;
    }

    addAttendance(isPresent) {
        if (this.attendance.length < this.maxClasses) {
            this.attendance.push(isPresent);
            this.grades.push(null); // изначально нет оценки
        }
    }

    setGrade(classIndex, grade) {
        if (classIndex >= 0 && classIndex < this.attendance.length) {
            if (grade >= 0 && grade <= 100) {
                this.grades[classIndex] = grade;
            }
        }
    }

    canAddGrade() {
        return this.grades.length < this.attendance.length;
    }

    summary() {
        const attended = this.attendance.filter(v => v === true).length;
        const total = this.maxClasses;
        const attendanceRate = total > 0 ? attended / total : 0;
        const avgGrade = this.getAverageGrade();

        let message;
        if (avgGrade > 90 && attendanceRate > 0.9) {
            message = "Молодець!";
        } else if (avgGrade < 90 && attendanceRate < 0.9) {
            message = "Редиска!";
        } else {
            message = "Добре, але можна краще";
        }

        return { attended, total, rate: attendanceRate, message };
    }

    save(key) {
        localStorage.setItem(key, JSON.stringify({
            attendance: this.attendance,
            grades: this.grades
        }));
    }

    load(key) {
        const data = JSON.parse(localStorage.getItem(key));
        if (data) {
            this.attendance = data.attendance || [];
            this.grades = data.grades || [];
        }
    }
}

// ===== Студенты =====
const students = [
    new Student("Євген", "Трясцин", 2004),
    new Student("Олена", "Щеглакова", 2003),
    new Student("Денис", "Савчук", 2005)
];

// ===== Отрисовка студента =====
function updateStudentBlock(student, id) {
    const block = document.getElementById(id);
    block.querySelector("h2").textContent = `${student.firstName} ${student.lastName}`;
    block.querySelector(".greet").textContent = `Вік: ${student.getAge()} років`;

    const addGradeBtn = block.querySelector(".add-grade");
    const hasEmptySlot = student.grades.some(g => g === null);
    addGradeBtn.disabled = !hasEmptySlot;

    const container = block.querySelector(".attendance-container");
    container.innerHTML = "";

    student.attendance.forEach((attended, i) => {
        const cell = document.createElement("div");
        cell.classList.add(attended ? "attendance-present" : "attendance-absent");

        const gradeSpan = document.createElement("span");
        gradeSpan.classList.add("grade-span");
        gradeSpan.textContent = student.grades[i] !== null ? student.grades[i] : "";
        cell.appendChild(gradeSpan);

        container.appendChild(cell);
    });

    for (let i = student.attendance.length; i < student.maxClasses; i++) {
        const cell = document.createElement("div");
        container.appendChild(cell);
    }

    const summary = student.summary();
    block.querySelector(".attended-info").textContent = `Відвідано ${summary.attended} з ${summary.total}`;
    block.querySelector(".avg-grade").textContent = `Середній бал: ${student.getAverageGrade().toFixed(1)}`;
    block.querySelector(".rating").textContent = `Відвідуваність: ${(summary.rate * 100).toFixed(1)}%`;
    block.querySelector(".summary").textContent = `Підсумок: ${summary.message}`;
}

// ===== Инициализация и кнопки =====
students.forEach((student, index) => {
    const id = `student${index + 1}`;
    student.load(id);
    updateStudentBlock(student, id);

    const block = document.getElementById(id);

    block.querySelector(".add-present").addEventListener("click", () => {
        student.addAttendance(true);
        student.save(id);
        updateStudentBlock(student, id);
    });

    block.querySelector(".add-absent").addEventListener("click", () => {
        student.addAttendance(false);
        student.save(id);
        updateStudentBlock(student, id);
    });

    block.querySelector(".undo-attendance").addEventListener("click", () => {
        student.undoLastAttendance();
        student.save(id);
        updateStudentBlock(student, id);
    });

    block.querySelector(".add-grade").addEventListener("click", () => {
        
        const index = student.grades.findIndex(g => g === null);
    
        if (index === -1) {
            alert("Кількість оцінок не може бути більшою за кількість занять");
            return;
        }
    
        const input = block.querySelector(".new-grade");
        const value = Number(input.value);
    
        if (!isNaN(value) && value >= 0 && value <= 100) {
            student.setGrade(index, value);
            input.value = "";
            student.save(id);
            updateStudentBlock(student, id);
        }
    });

    block.querySelector(".reset-student").addEventListener("click", () => {
        localStorage.removeItem(id);

        student.attendance = [];
        student.grades = [];

        updateStudentBlock(student, id);
    });
});