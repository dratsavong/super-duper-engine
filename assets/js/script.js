var apiKey = '836192450236194a19ef6aefebd5ccca';

function getApi() {
   
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=39.9622601&lon=-83.0007065&appid=836192450236194a19ef6aefebd5ccca`;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.city.name);
        //select some html  element in java script and set it to text content to be data.city.name or store it in a variable to make use of it in other parts of application 

        let city = data.city.name;
        return city
      });
}
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}



//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

  getApi()