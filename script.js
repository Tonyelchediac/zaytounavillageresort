document.getElementById('menu-toggle').onclick = function() {
    var nav = document.getElementById('nav-links');
    nav.style.display = nav.style.display === "block" ? "none" : "block";
    this.classList.toggle('change');
  }

  // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://forecast7.com/en/34d2535d66/batroun/`
// Function to fetch weather data and update HTML
async function getWeather(city) {
  try {
    const response = await fetch(apiUrl.replace('CITY_NAME', city));
    const data = await response.json();
    const weatherInfo = `
      <p>City: ${data.name}</p>
      <p>Temperature: ${data.main.temp} &deg;C</p>
      <p>Weather: ${data.weather[0].main}</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather-info').innerHTML = '<p>Failed to fetch weather data</p>';
  }
}

// Initial call to fetch weather for a city
getWeather('Batroun'); // Replace 'YourCityName' with your desired city
