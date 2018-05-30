document.addEventListener('DOMContentLoaded', function () {

    var currentCity = document.querySelector('.city-current');
    var currentCountry = document.querySelector('.country-current');
    var currentTemp = document.querySelector('#current-temp');
    var currentTime = document.querySelector('.time-current');
    var windWay = document.querySelector('.wind-way');
    var windPower = document.querySelector('.wind-power');
    var currentIcon = document.querySelector('.current-icon');

    var weekDiv = document.querySelector('.weather-week');
    var nextTime = document.querySelector('.next-time');
    var dayTime = document.querySelector('.day-time');
    var weatherIcon = document.querySelector('.weather-icon');
    var timeTemp = document.querySelector('#temp');

    var req = new XMLHttpRequest();

    req.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk,by&APPID=d247634481dbb5763c73c6a7aa7260d7', true);
    req.responseType = "json";

    req.onerror = function () {
        console.log('Error');
        console.log(req.status);
    };

    req.onload = function () {
        var response = req.response;
        console.log(response);
        currentCity.textContent = response.city.name;
        currentCountry.textContent = response.city.country;
        currentTemp.textContent = (response.list[0].main.temp - 273).toFixed();
        currentTime.textContent = response.list[0].dt_txt;
        windWay.textContent = response.list[0].wind.deg;
        windPower.textContent = response.list[0].wind.speed;
        currentIcon.style.backgroundImage = 'url(img/icons/'+response.list[0].weather[0].icon+'.png)';

        var out ='';
        for(i=0; i < response.list.length; i+=8){
            out += '<div class="next-time">';
            out += '<p class="day-time">'+response.list[i].dt_txt+'</p>';
            out += '<p class="weather-icon"><img src="img/icons/'+response.list[i].weather[0].icon+'.png"></p>';
            out += '<p class="temp">+<span id="temp">'+(response.list[i].main.temp - 273).toFixed()+'</span> C°</p>';
            out += '</div>';
        }
        weekDiv.innerHTML += out;
    };

    req.send();


});
