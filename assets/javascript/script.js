
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
    dateEl.textContent = date
    var today = document.getElementById("temp")
    var temp = city.main.temp
    today.textContent = temp

}

var btn = document.querySelector(".btn")
btn.addEventListener("click", search)