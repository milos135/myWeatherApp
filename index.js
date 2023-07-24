let weather = {
"apiKey" : "4ff50176f17a1a9eec162b0203a0abad",
fetchWeather: function(sity) {
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + sity + "&units=metric&appid=" + this.apiKey).then((response) =>response.json()).then((data)=>
this.displayWeather(data));

}, 
displayWeather: function(data) {
const{ name } =data;
const { description } =data.weather[0];
const { temp,humidity }= data.main;
const {speed } = data.wind;
console.log(name,description,temp,humidity,speed);
document.querySelector(".sity").innerText= "Weather in " + name;
document.querySelector(".description").innerText = description;
document.querySelector(".temp").innerText = temp + "°C";
document.querySelector(".humidity").innerText =
  "Humidity: " + humidity + "%";
document.querySelector(".wind").innerText =
  "Wind speed: " + speed + " km/h";
document.querySelector(".weather").classList.remove("loading");
document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";



},

search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Belgrade");
