var city = "";
var country = "";
var temperature = 0;
var status="";
var icon="";
var longitude = 0;
var latitude = 0;
var humidity = 0;
var pressure = 0;
var wind = 0;
var extraInfoStatus = false;
var systemCelsius = true;
var deniedAccess = false;
// delete the tests later

getLocation();

document.getElementById("more-less-button").onclick = moreLessFunction;

document.getElementById("temperature-system").onclick = changeTemperatureSystem;

document.getElementById("lat-lon-submit").onclick = getWeatherManually;


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLatLon, showError);
    } else {
        alert("Your browser doesn't support location detection! We are so sorry!");
    }
}

function getLatLon(position) {
    if (deniedAccess == false)
        {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        }

    // getting the weather details from the API
    $.ajax({
    type:'GET',
    async: false,
    url:'https://fcc-weather-api.glitch.me/api/current?lon='+longitude+'&lat='+latitude,
    dataType: 'json',
    success:function(data){
    city = data.name;
    country = data.sys.country;
    temperature = data.main.temp;
    status = data.weather[0].description;
    icon = data.weather[0].icon;
    humidity = data.main.humidity;
    pressure = data.main.pressure;
    wind = data.wind.speed;
   }
 });

    // display the results
    changeTheResult();
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("You denied the access to your location, kindly refresh and allow!")
            console.log("User denied the request for Geolocation.")
            // maybe the browser was over-protective and deny without asking the user, so there is a form to show in this case, change the margin-top into 0%, clear the input-text fields and set the flag that acces was deined
            document.getElementById("other-options").style.display = "block";
            document.getElementById("instruction").style.marginTop = "0%";
            latitude = document.getElementById("input-lat").value = "";
            latitude = document.getElementById("input-long").value = "";
            deniedAccess = true;
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Your current location is unavailable, kindly try again later!")
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("Response took too much time, kindly refresh and grant permission agina!")
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Unknow error happened, kindly refresh and try again!")
            console.log("An unknown error occurred.");
            break;
    }
}

// after getting the information, change instruction label into results labels
function changeTheResult(){
    
    // only change the result if you got some valid longitude and latitude
    if (longitude == 0 && latitude==0)
        alert("Unknow error happened, kindly refresh and try again!")
    else {

        // setting the values for the result
        document.getElementById("city").innerHTML = city + ", "+ country;
        document.getElementById("temperature").innerHTML = temperature.toFixed(1);
        document.getElementById("temperature-system").innerHTML = String.fromCharCode(176) + " C ";
        document.getElementById("status").innerHTML = status;
        document.getElementById("icon").src = icon;
        document.getElementById("latitude").innerHTML = latitude.toFixed(2);
        document.getElementById("longitude").innerHTML = longitude.toFixed(2);
        document.getElementById("humidity").innerHTML = humidity;
        document.getElementById("pressure").innerHTML = pressure;
        document.getElementById("wind").innerHTML = wind;

        // hide the instructions and display the result
        document.getElementById("instruction").style.display = "none";
        document.getElementById("results").style.display = "block";
        // change the Image
        changeWeatherImage ();
    }
}

function moreLessFunction() {
    if (extraInfoStatus == false){
        document.getElementById("extra-info-rows").style.display = "block";
        document.getElementById("more-less-button").innerHTML = "Less Details";
        extraInfoStatus = true;
    }
    else {
        document.getElementById("extra-info-rows").style.display = "none";
        document.getElementById("more-less-button").innerHTML = "More Details";
        extraInfoStatus = false;
    }
}
    
function changeWeatherImage () {
    if (status == "clear sky"){
        document.getElementById("weather-image").src = "http://amjadmajed.com/weatherMachine/images/clearSky.jpg";
    }
    else if (status == "few clouds"){
        document.getElementById("weather-image").src = "http://amjadmajed.com/weatherMachine/images/fewClouds.jpg";
    } 
    else if (status == "scattered clouds"){
        document.getElementById("weather-image").src = "http://amjadmajed.com/weatherMachine/images/scatteredClouds.jpg";
    } 
    else if (status == "broken clouds"){
        document.getElementById("weather-image").src = "http://amjadmajed.com/weatherMachine/images/brokenClouds.jpg";
    } 
    else if (status == "shower rain"){
        document.getElementById("weather-image").src = "http://amjadmajed.com/weatherMachine/images/showerRain.jpg";
    } 
    else if (status == "rain"){
        document.getElementById("weather-image").src = "http://amjadmajed.com/weatherMachine/images/rain.jpg";
    } 
    else if (status == "thunderstorm"){
        document.getElementById("weather-image").src = "http://amjadmajed.com/weatherMachine/images/thunderstorm.jpg";
    } 
    else if (status == "snow"){
        document.getElementById("weather-image").src = "http://amjadmajed.com/weatherMachine/images/snow.jpg";
    } 
    else if (status == "mist"){
        document.getElementById("weather-image").src = "http://amjadmajed.com/weatherMachine/images/mist.jpg";
    } 
}

function changeTemperatureSystem () {
    if (systemCelsius == true){
        temperature = ( temperature * ( 9 / 5 ) ) + 32;
        document.getElementById("temperature").innerHTML = temperature.toFixed(1);
        document.getElementById("temperature-system").innerHTML = " F ";
        systemCelsius = false;
    }
    else {
        temperature = ( temperature - 32 ) * ( 5 / 9);
        document.getElementById("temperature").innerHTML = temperature.toFixed(1);
        document.getElementById("temperature-system").innerHTML = " C ";
        systemCelsius = true;
    }
}

function getWeatherManually () {
    
    latitude = document.getElementById("input-lat").value ;
    longitude = document.getElementById("input-long").value ;
    // it is necessary to convert the values retreived into numbers
    latitude = Number(latitude);
    longitude = Number(longitude);
    // in case a user didn't enter any values
    if (latitude == 0 && longitude == 0)
        alert("Please enter some values for your location!");
    else
        getLatLon(false);
}