let weather = {
"apiKey" : "4ff50176f17a1a9eec162b0203a0abad",
fetchWeather: async function(city){
try{
const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
); 

const data =await response.json();
this.displayWeather(data);
}
catch(error){
console.error("Error fetching weather data:",error);
}


}, 
displayWeather: function(data) {
const{ name,weather,main,wind } =data;
const { description } =weather[0];
const { temp,humidity }= main;
const {speed } = wind;

document.querySelector(".city").innerText= "Weather in " + name;
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
