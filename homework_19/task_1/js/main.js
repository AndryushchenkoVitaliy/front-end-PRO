'use strict';

class WeatherWidget {
    constructor(apiKey, city = "Kyiv") {
        this.apiKey = apiKey;
        this.city = city;

        this.dateEl = document.querySelector(".date");
        this.timeEl = document.querySelector(".time");
        this.tempEl = document.querySelector(".temperature");
        this.feelsEl = document.querySelector(".feels-like");
        this.descEl = document.querySelector(".description");
        this.iconEl = document.querySelector(".icon");
        this.humidityEl = document.querySelector(".humidity");
        this.pressureEl = document.querySelector(".pressure");
        this.windEl = document.querySelector(".wind");
        this.refreshBtn = document.querySelector(".refresh-btn");

        this.refreshBtn.addEventListener("click", () => this.updateWeather());

        this.updateWeather();
    }

    async fetchWeather() {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
            const res = await fetch(url);
            if (!res.ok) throw new Error("Ошибка запроса погоды");
            const data = await res.json();
            return data;
        } catch (error) {
            alert(error);
            console.error(error);
        }
    }

    formatTime(date) {
        const options = { hour: "2-digit", minute: "2-digit", weekday: "short", month: "short", day: "numeric", year: "numeric" };
        return date.toLocaleString("en-US", options);
    }

    async updateWeather() {
        const data = await this.fetchWeather();
        if (!data) return;

        const now = new Date();
        this.dateEl.textContent = now.toDateString();
        this.timeEl.textContent = now.toLocaleTimeString();

        this.tempEl.textContent = `${Math.round(data.main.temp)}°C`;
        this.feelsEl.textContent = `Feels Like: ${Math.round(data.main.feels_like)}°C`;
        this.descEl.textContent = data.weather[0].description;
        this.iconEl.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        this.humidityEl.textContent = data.main.humidity;
        this.pressureEl.textContent = data.main.pressure;
        this.windEl.textContent = (data.wind.speed * 3.6).toFixed(1);
    }
}

const apiKey = "96f97e6082d31bdc16b6bfe05f990df0";
const weather = new WeatherWidget(apiKey, "Kyiv");