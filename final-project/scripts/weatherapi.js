const currentTemp = document.querySelector('.current-temp');
const humidity = document.querySelector('.humidity');
const captionDesc = document.querySelector('.caption');
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.15&lon=117.35&appid=c36ca3679f5d7442919c8881933c321b&units=imperial'
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
    humidity.textContent = weatherData.current.humidity
    currentTemp.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;
    const desc = weatherData.current.weather[0].description;
    const arr = desc.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const desc2 = arr.join(" ");
    weatherIcon.setAttribute('alt', desc2);
    captionDesc.textContent = desc2;

};

