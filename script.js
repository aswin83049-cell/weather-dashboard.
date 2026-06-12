const API_KEY = "YOUR_API_KEY";

async function getWeather() {
    const city = document.getElementById("city").value;
    const weatherDiv = document.getElementById("weather");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        weatherDiv.innerHTML =
            `<p style="color:red">${error.message}</p>`;
    }
}
