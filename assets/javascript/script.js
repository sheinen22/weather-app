
var search = function (event) {
    event.preventDefault();
    var city = document.querySelector(".userInput")
    var cityName = city.value;
  
    if (cityName) {
      todaysWeather(cityName);
  
    } else {
      alert('Please enter a valid City Name');
    }
  };



var todaysWeather = function (city) {
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=42c49bdaa93e31954b05decbf9b6c563"
    fetch(currentWeather)
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {
                    showCurrent(data)
                })
            } else {
                alert("Error, weather not found")
            }
        })
}

var fiveDayWeather = function (city) {
    var fiveCast = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=imperial&appid=42c49bdaa93e31954b05decbf9b6c563"

    fetch(fiveCast)
        .then(function (res) {
            if (res.ok) {
                res.json().then(function(data) {
                    // function for displaying (data)
                })
            } else {
                alert("Error, weather not found")
            }
        })
}

var showCurrent = function (city) {
    var date = moment().format("M/D/YYYY")
    var dateEl = document.getElementById("date")
    dateEl.textContent = city.name + " " + date
    var today = document.getElementById("temp")
    var temp = "Temp: " + city.main.temp + "F"
    today.textContent = temp
    var icon = city.weather[0].icon
    var iconEl = document.createElement("img")
    iconEl.src = "http://openweathermap.org/img/w/"+ icon +".png"
    var humid = document.getElementById("humidity")
    humid.textContent = "Humidity: " + city.main.humidity + "%"
    var wind = document.getElementById("windSpeed")
    wind.textContent = "Wind Speed: " + city.wind.speed + "MPH"
    var uv = document.getElementById("uvIndex")
    uv.textContent = "UV Index: " + city.uvi
    today.appendChild(iconEl)
}

var btn = document.querySelector(".btn")
btn.addEventListener("click", search)