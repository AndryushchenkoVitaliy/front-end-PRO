'use strict';

let birthYear = prompt("Введіть свій рік народження:");
if (birthYear === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
} else {
    birthYear = Number(birthYear);
}

let city = prompt("Введіть місто, в якому Ви живете:");
if (city === null) {
    alert("Шкода, що Ви не захотіли ввести місто");
}

let sport = prompt("Введіть свій улюблений вид спорту:");
if (sport === null) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
}

if (birthYear !== null && city !== null && sport !== null) {

    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    let cityMessage;
    switch(city.toLowerCase()) {
        case "київ":
            cityMessage = "Ти живеш у столиці України";
            break;
        case "вашингтон":
            cityMessage = "Ти живеш у столиці США";
            break;
        case "лондон":
            cityMessage = "Ти живеш у столиці Великобританії";
            break;
        default:
            cityMessage = `Ти живеш у місті ${city}`;
    }

    const champions = {
        "футбол": "Ліонель Мессі",
        "формула-1": "Жан Алезі",
        "бокс": "Майк Тайсон"
    };

    let sportMessage = champions[sport.toLowerCase()]
        ? `Круто! Хочеш стати ${champions[sport.toLowerCase()]}?`
        : "";

    alert(`Тобі ${age} років.\n${cityMessage}.\n${sportMessage}`);
}