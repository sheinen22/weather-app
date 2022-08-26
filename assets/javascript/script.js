
var search = function (event) {
    event.preventDefault();
    var city = document.querySelector(".userInput")
    var cityName = city.value;
  
    if (cityName) {
      todaysWeather(cityName);
      fiveDayWeather(cityName)
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
                    showFuture(data)
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

var showFuture = function (city) {
    var date = moment().add(1, "day").format("M/D/YYYY")
    var dateEl1 = document.getElementById("date1")
    dateEl1.textContent = date
    var temp = document.getElementById("temp1")
    temp.textContent = "Temp: " + city.list[0].main.temp + "F"
    var icon = city.list[0].weather[0].icon
    var iconEl = document.createElement("img")
    iconEl.src = "http://openweathermap.org/img/w/"+ icon +".png"
    var humid = document.getElementById("humidity1")
    humid.textContent = "Humidity: " + city.list[0].main.humidity + "%"
    var wind = document.getElementById("windSpeed1")
    wind.textContent = "Wind Speed: " + city.list[0].wind.speed + "MPH"
    temp.appendChild(iconEl)

    var date2 = moment().add(2, "day").format("M/D/YYYY")
    var dateEl2 = document.getElementById("date2")
    dateEl2.textContent = date2
    var temp2 = document.getElementById("temp2")
    temp2.textContent = "Temp: " + city.list[1].main.temp + "F"
    var icon2 = city.list[1].weather[0].icon
    var iconEl2 = document.createElement("img")
    iconEl2.src = "http://openweathermap.org/img/w/"+ icon2 +".png"
    var humid2 = document.getElementById("humidity2")
    humid2.textContent = "Humidity: " + city.list[1].main.humidity + "%"
    var wind2 = document.getElementById("windSpeed2")
    wind2.textContent = "Wind Speed: " + city.list[1].wind.speed + "MPH"
    temp2.appendChild(iconEl2)

    var date3 = moment().add(3, "day").format("M/D/YYYY")
    var dateEl3 = document.getElementById("date3")
    dateEl3.textContent = date3
    var temp3 = document.getElementById("temp3")
    temp3.textContent = "Temp: " + city.list[2].main.temp + "F"
    var icon3 = city.list[2].weather[0].icon
    var iconEl3 = document.createElement("img")
    iconEl3.src = "http://openweathermap.org/img/w/"+ icon3 +".png"
    var humid3 = document.getElementById("humidity3")
    humid3.textContent = "Humidity: " + city.list[2].main.humidity + "%"
    var wind3 = document.getElementById("windSpeed3")
    wind3.textContent = "Wind Speed: " + city.list[2].wind.speed + "MPH"
    temp3.appendChild(iconEl3)

    var date4 = moment().add(4, "day").format("M/D/YYYY")
    var dateEl4 = document.getElementById("date4")
    dateEl4.textContent = date4
    var temp4 = document.getElementById("temp4")
    temp4.textContent = "Temp: " + city.list[3].main.temp + "F"
    var icon4 = city.list[3].weather[0].icon
    var iconEl4 = document.createElement("img")
    iconEl4.src = "http://openweathermap.org/img/w/"+ icon4 +".png"
    var humid4 = document.getElementById("humidity4")
    humid4.textContent = "Humidity: " + city.list[3].main.humidity + "%"
    var wind4 = document.getElementById("windSpeed4")
    wind4.textContent = "Wind Speed: " + city.list[3].wind.speed + "MPH"
    temp4.appendChild(iconEl4)

    var date5 = moment().add(5, "day").format("M/D/YYYY")
    var dateEl5 = document.getElementById("date5")
    dateEl5.textContent = date5
    var temp5 = document.getElementById("temp5")
    temp5.textContent = "Temp: " + city.list[4].main.temp + "F"
    var icon5 = city.list[4].weather[0].icon
    var iconEl5 = document.createElement("img")
    iconEl5.src = "http://openweathermap.org/img/w/"+ icon5 +".png"
    var humid5 = document.getElementById("humidity5")
    humid5.textContent = "Humidity: " + city.list[4].main.humidity + "%"
    var wind5 = document.getElementById("windSpeed5")
    wind5.textContent = "Wind Speed: " + city.list[4].wind.speed + "MPH"
    temp5.appendChild(iconEl5)
}

var btn = document.querySelector(".btn")
btn.addEventListener("click", search)