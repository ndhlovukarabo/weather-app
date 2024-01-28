function refreshWeather(response){
    let tempearatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date=newDate=formatDate(Date);

    cityElement.innerHTML=response.data.city;
      timeElement.innerHTML = formatDate(date);
      descriptionElement.innerHTML = response.data.condition.description;
      humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
      windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    tempearatureElement.innerHTML=Math.round(temperature);

}
function searchCity(city){
let apikey = "b2a5adcct04b33178913oc335f405433";
let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
axios.get(apiurl).then(refreshWeather);
}


function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=searchInput.value;
    searchCity(searchInput.value)

}
let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);
searchCity("Paris");