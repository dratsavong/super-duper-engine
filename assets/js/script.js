
var apiKey = '836192450236194a19ef6aefebd5ccca';
var searchFormEl = document.querySelector("#search-form");
var searchHist = document.querySelector("#search-hist");
var searchList = [];

$(document).ready(function () {
  //render todays date:
  var today = dayjs();
  $('#city-date').text(today.format('M/D/YYYY')); 
}); 

function searchApi(city) {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=836192450236194a19ef6aefebd5ccca&units=imperial';

  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    let name = data.name;
    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;


    var cityName = document.querySelector("#city-name");
    cityName.textContent = name

    var cityTemp = document.querySelector("#city-temp");
    cityTemp.textContent = "Temp: " + temp + " °F";

    var cityHum = document.querySelector("#city-humidity");
    cityHum.textContent = "Humidity: " + humidity + "%";

    var cityWind = document.querySelector("#city-wind");
    cityWind.textContent = "Wind: " + wind + " MPH";
   
    return city;
  })

  var forecastRequestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&appid=836192450236194a19ef6aefebd5ccca&units=imperial'; 

  fetch(forecastRequestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    var date1 = data.list[0].dt_txt;
    var temp1 = data.list[0].main.temp;
    var wind1 = data.list[0].wind.speed;
    var hum1 = data.list[0].main.humidity;
    
    var cityDate1 = document.querySelector("#future-date-1");
    cityDate1.textContent = date1;

    var cityTemp1 = document.querySelector("#future-temp-1");
    cityTemp1.textContent = "Temp: " + temp1 + " °F";

    var cityHum1 = document.querySelector("#future-hum-1");
    cityHum1.textContent = "Humidity: " + hum1 + "%";

    var cityWind1 = document.querySelector("#future-wind-1");
    cityWind1.textContent = "Wind: " + wind1 + " MPH";

    var date2 = data.list[8].dt_txt;
    var temp2 = data.list[8].main.temp;
    var wind2 = data.list[8].wind.speed;
    var hum2 = data.list[8].main.humidity;
    
    var cityDate2 = document.querySelector("#future-date-2");
    cityDate2.textContent = date2;

    var cityTemp2 = document.querySelector("#future-temp-2");
    cityTemp2.textContent = "Temp: " + temp2 + " °F";

    var cityHum2 = document.querySelector("#future-hum-2");
    cityHum2.textContent = "Humidity: " + hum2 + "%";

    var cityWind2 = document.querySelector("#future-wind-2");
    cityWind2.textContent = "Wind: " + wind2 + " MPH";

    var date3 = data.list[16].dt_txt;
    var temp3 = data.list[16].main.temp;
    var wind3 = data.list[16].wind.speed;
    var hum3 = data.list[16].main.humidity;
    
    var cityDate3 = document.querySelector("#future-date-3");
    cityDate3.textContent = date3;

    var cityTemp3 = document.querySelector("#future-temp-3");
    cityTemp3.textContent = "Temp: " + temp3 + " °F";

    var cityHum3 = document.querySelector("#future-hum-3");
    cityHum3.textContent = "Humidity: " + hum3 + "%";

    var cityWind3 = document.querySelector("#future-wind-3");
    cityWind3.textContent = "Wind: " + wind3 + " MPH";
    
    var date4 = data.list[24].dt_txt;
    var temp4 = data.list[24].main.temp;
    var wind4 = data.list[24].wind.speed;
    var hum4 = data.list[24].main.humidity;
    
    var cityDate4 = document.querySelector("#future-date-4");
    cityDate4.textContent = date4;

    var cityTemp4 = document.querySelector("#future-temp-4");
    cityTemp4.textContent = "Temp: " + temp4 + " °F";

    var cityHum4 = document.querySelector("#future-hum-4");
    cityHum4.textContent = "Humidity: " + hum4 + "%";

    var cityWind4 = document.querySelector("#future-wind-4");
    cityWind4.textContent = "Wind: " + wind4 + " MPH";

    var date5 = data.list[32].dt_txt;
    var temp5 = data.list[32].main.temp;
    var wind5 = data.list[32].wind.speed;
    var hum5 = data.list[32].main.humidity;
    
    var cityDate5 = document.querySelector("#future-date-5");
    cityDate5.textContent = date5;

    var cityTemp5 = document.querySelector("#future-temp-5");
    cityTemp5.textContent = "Temp: " + temp5 + " °F";

    var cityHum5 = document.querySelector("#future-hum-5");
    cityHum5.textContent = "Humidity: " + hum5 + "%";

    var cityWind5 = document.querySelector("#future-wind-5");
    cityWind5.textContent = "Wind: " + wind5 + " MPH";

    let lastCity = data.city.name;
    console.log(lastCity);
    searchHistory(lastCity);    
  })
}

function searchHistory(lastCity) {
  console.log(lastCity);
  localStorage.setItem(lastCity, JSON.stringify(lastCity));
  searchHist.textContent = localStorage.getItem (lastCity)
}


function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#city-name-input').value;
  

  if (!searchInputVal) {
    console.error('Please enter a city name!');
    return;
  }

  searchApi(searchInputVal);
}

searchFormEl.addEventListener('click', handleSearchFormSubmit)