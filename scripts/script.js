document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("location");
    const buttonElement = document.getElementById("search-btn");
    const cityElement = document.getElementById("city");

    const weatherInfo = document.getElementById("weather-container");
    buttonElement.addEventListener("click", () => {
        const textValue = textInput.value;
        console.log(textValue, city);
        city.innerHTML = textValue;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textValue}&appid=c71ac52e37c46587fac21f10c3f3b094`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const cityName = data.name;
                const temperature = parseInt(data.main.temp - 273.15);
                const description = data.weather[0].description;
                console.log(temperature, description, cityName);
                // Changing the UI
                const weatherHTML =
                    `<h1 id="city">${cityName}</h1>
        <h3><span id="temp">${temperature}</span>&deg;C</h3>
    <h1 id="status" class="lead">${description}</h1>`
                weatherInfo.innerHTML = weatherHTML;
            })
            .catch((err) => console.error(err))
    });




























});