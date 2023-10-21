document.addEventListener("DOMContentLoaded", () => {


    const weatherInfo = document.getElementById("weather-container");
    fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=c71ac52e37c46587fac21f10c3f3b094")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const temperature = parseInt(data.main.temp - 273.15);
            const description = data.weather[0].description;
            console.log(temperature, description);



            // Changing the UI

            const weatherHTML =
                `<h1 id="city">London</h1>
            <h3><span id="temp">${temperature}</span>&deg;C</h3>
        <h1 id="status" class="lead">${description}</h1>`

            weatherInfo.innerHTML = weatherHTML;
        })
        .catch((err) => console.error(err))



});