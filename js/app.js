let elCountry = document.querySelector(".country");
let elTemp = document.querySelector(".temp");
let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form-input") ;
let elBtnForm = document.querySelector(".btn-form");
let API_KEY = "3babf5305e2fdf755d46d99de1f887f7"


async function  checkWeather(city){
    let WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
    let response = await fetch(WEATHER_URL  + `&appid=${API_KEY}`);
    let data = await response.json();
    console.log(data);
    elCountry.textContent = data.name;
    elTemp.textContent = `${Math.round(data.main.temp)}^C`
} 

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    checkWeather(elFormInput.value.trim());
})