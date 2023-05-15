const humidityLevel = document.querySelector('.humidity');
const feel = document.querySelector('.realfeel');
const desc = document.querySelector('.description');
const cloudCover = document.querySelector('.cloud_cover');
const temperature = document.querySelector('.temp');
const windSpeed = document.querySelector('.wind_speed');
const weather = document.querySelector('.weather');
const searchbar = document.querySelector('input');
const icon_img = document.querySelector('.icon_img');
const visibilityStatus = document.querySelector('.visibility');
const searchBtn = document.querySelector('.searchBtn');
const cityLoc = document.querySelector('.section2 h1');
const background = document.querySelector('.background');
const date = document.querySelector('.date');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');


// the fetch function
 
let fetchWeather = function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=1725a687524b70cadf86683c08692380")
    .then ((response) => response.json())
    .then((data)=> console.log(displayWeather(data)))
}

let displayWeather = function (data) {
    const {name, visibility} = data;
    const {speed} = data.wind;
    const {temp, feels_like, humidity} = data.main;
    const {icon, main} = data.weather[0];
    const {description} = data.weather[0];
    const {lon} = data.coord; 

    console.log(name, feels_like, speed, humidity, main, description, lon);
    document.querySelector('.background').style.backgroundImage = "url('https://source.unsplash.com/random/?weather "+name+"')";
    temperature.innerText = Math.round(temp) + "°C" + " in " + name;
    feel.innerText = "Real feel :" + feels_like;
    humidityLevel.innerText = "Humidity :  " + humidity;
    desc.innerText =  "Descritption : " + description;
    windSpeed.innerText = "Wind speed : " + speed;
    weather.innerText = main;
    visibilityStatus.innerText = "Visibility : "+  visibility;
    icon_img.src = "https://openweathermap.org/img/wn/" + icon + ".png";
    cityLoc.innerText = "Weather in " + name ;
    date.innerText = dater;

}
function search(){
    fetchWeather(searchbar.value);
}
fetchWeather('paris');

searchBtn.addEventListener("click", function(){
    search();
})
searchbar.addEventListener("keypress", ()=>{
    search();
})

// console.log(toDateString());
// let day = getDate();

const dater = new Date().toDateString();
console.log(dater);

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
})
