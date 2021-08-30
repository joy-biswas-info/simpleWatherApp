function getInput(id) {
    const input = document.getElementById(id);
const inputText = input.value;
    return inputText;
}
const getWeather = () => {
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${getInput('input')}&units=metric&appid=ab68c3c6730b171480e2ed2eeea340fc`
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data));
}
  
// getWeather();
const displayWeather = (data)=>{
        const weather = document.getElementById('show-weather');
    weather.innerHTML = `<p>Temperature: ${data.main.temp} &#8451;</br>
    Feels Like : ${data.main.feels_like} &#8451;</br>
  Visibilities: ${data.visibility / 1000} K.M</br>
  Description: ${data.weather[0].description}  </p>`

}