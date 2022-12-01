const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const winSpeed = document.querySelector('#windSpeed')
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Lihue,us&appid=e01cc28e23298de71ebebd1f654ffdd7&units=imperial'
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const wSpeed = weatherData.wind.speed;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const arr = desc.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const desc2 = arr.join(" ");
    winSpeed.textContent = wSpeed
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc2);
    captionDesc.textContent = desc2;

    const temperature = weatherData.main.temp;

    let result = 0;
    if (temperature <= 50 && wSpeed > 3) {
        result = 35.74 + 0.6215 * temperature - 35.75 * (wSpeed ** 0.16) + 0.4275 * temperature * (wSpeed ** 0.16)
        windChill.textContent = result.toFixed(2) + "°F";
    } else {
        windChill.textContent = "N/A"
    }
};

