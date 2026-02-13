'use strict';

class Timer {
    constructor(seconds, element) {
        this.initialSeconds = seconds;
        this.seconds = seconds;
        this.element = element;
        this.intervalId = null;

        this.render();
    }

    // Getter текущего времени (в секундах)
    get time() {
        return this.seconds;
    }

    formatTime() {
        const minutes = Math.floor(this.seconds / 60);
        const secs = this.seconds % 60;

        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    render() {
        this.element.textContent = this.formatTime();
    }

    start() {
        if (this.intervalId) return;

        this.intervalId = setInterval(() => {
            if (this.seconds <= 0) {
                this.stop();
                updateButtons();
                return;
            }

            this.seconds--;
            this.render();
        }, 1000);
    }

    pause() {
        this.stop();
    }

    reset() {
        this.stop();
        this.seconds = this.initialSeconds;
        this.render();
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
}

/* Инициализация таймера */
const timerElement = document.getElementById('timer');
const timer = new Timer(85, timerElement);

/* Кнопки */
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

/* Управление сосьояниями кнопок */
function updateButtons() {
    startBtn.disabled = timer.intervalId !== null;
    pauseBtn.disabled = timer.intervalId === null;
}

startBtn.addEventListener('click', () => {
    timer.start();
    updateButtons();
});

pauseBtn.addEventListener('click', () => {
    timer.pause();
    updateButtons();
});

resetBtn.addEventListener('click', () => {
    timer.reset();
    updateButtons();
});

updateButtons();