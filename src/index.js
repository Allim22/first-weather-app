let now = new Date();

let hour = now.getHours() % 12;
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let dayTime = document.querySelector("#dayTime");
dayTime.innerHTML = `${day} ${hour}:${minutes}pm`;

function newCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchText");
  let city = document.querySelector("strong");
  city.innerHTML = `${searchInput.value}`;
  let apiKey = "203fa770242fcd2b9555d832a88ea567";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&&units=imperial`;

  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  console.log(response);
  let temp = Math.round(response.data.main.temp);
  let wind = Math.round(response.data.wind.speed);
  let humidity = response.data.main.humidity;
  let clarity = response.data.weather[0].description;
  let boldTemp = document.querySelector(".number");
  boldTemp.innerHTML = `${temp}`;
  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML = `Wind: ${wind}mph`;
  let newHumidity = document.querySelector("#wetAir");
  newHumidity.innerHTML = `Humidity: ${humidity}%`;
  let newSky = document.querySelector("#sky");
  newSky.innerHTML = `${clarity}`;
}

let form = document.querySelector("#typeCity");

form.addEventListener("submit", newCity);
