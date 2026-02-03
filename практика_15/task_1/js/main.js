'use strict';

let users = JSON.parse(localStorage.getItem('users')) || [];
let editId = null;

const tableBody = document.getElementById('tableBody');
const formBlock = document.getElementById('formBlock');
const viewBlock = document.getElementById('viewBlock');
const saveBtn = document.getElementById('saveBtn');

// 1. Рендер таблиці
function renderTable() {
    tableBody.innerHTML = '';
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                    <td>${user.age}</td>
                    <td>
                        <button onclick="viewUser(${user.id})" style="background:#6200ee; color:white;">View</button>
                        <button onclick="editUser(${user.id})" style="background:#6200ee; color:white;">Edit</button>
                        <button onclick="removeUser(${user.id})" style="background:#6200ee; color:white;">Delete</button>
                    </td>
                `;
        tableBody.appendChild(tr);
    });
    localStorage.setItem('users', JSON.stringify(users));
}

// 2. Показати порожню форму для Add
function showForm() {
    editId = null;
    document.getElementById('userName').value = '';
    document.getElementById('userPhone').value = '';
    document.getElementById('userAge').value = '';
    formBlock.style.display = 'block';
    viewBlock.style.display = 'none';
}

// 3. Збереження (Add або Update)
saveBtn.onclick = function () {
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const age = document.getElementById('userAge').value;

    if (!name || !phone || !age) return alert("Заповніть всі поля!");

    if (editId) {
        // Редагування
        const index = users.findIndex(u => u.id === editId);
        users[index] = { ...users[index], name, phone, age };
    } else {
        // Додавання нового
        const newUser = {
            id: Date.now(), // Унікальний ID
            name,
            phone,
            age
        };
        users.push(newUser);
    }

    renderTable();
    formBlock.style.display = 'none';
};

// 4. View - перегляд
function viewUser(id) {
    const user = users.find(u => u.id === id);
    document.getElementById('jsonOutput').textContent = JSON.stringify(user, null, 2);
    viewBlock.style.display = 'block';
}

// 5. Edit - заповнення форми даними
function editUser(id) {
    const user = users.find(u => u.id === id);
    editId = id;
    document.getElementById('userName').value = user.name;
    document.getElementById('userPhone').value = user.phone;
    document.getElementById('userAge').value = user.age;
    formBlock.style.display = 'block';
    viewBlock.style.display = 'none';
}

// 6. Remove - видалення з підтвердженням
function removeUser(id) {
    if (confirm("Ви впевнені, що хочете видалити цього користувача?")) {
        users = users.filter(u => u.id !== id);
        renderTable();
        viewBlock.style.display = 'none';
    }
}

// Ініціалізація при завантаженні
renderTable();