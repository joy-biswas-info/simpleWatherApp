const getWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=manikgonj&units=metric&appid=ab68c3c6730b171480e2ed2eeea340fc')
    .then(res=>res.json())
    .then(data=>displayWeather(data))
}
  
getWeather();
const displayWeather = (data)=>{
    const weather = document.getElementById('show-weather');
    weather.innerHTML = `<p>Temperature: ${data.main.temp} C</br>
  Visibilities: ${data.visibility/1000} K.M  </p>`
}