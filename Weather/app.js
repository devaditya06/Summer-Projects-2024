document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'c509743c990066f028b03b9253bee45e'; // Replace with your OpenWeatherMap API key

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${c509743c990066f028b03b9253bee45e}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found or API error");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('weatherDescription').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = `${data.main.temp}°C`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Could not retrieve weather data. Please check the city name and try again.");
        });
});
