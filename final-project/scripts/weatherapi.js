const currentTemp = document.querySelector('.current-temp');
const humidity = document.querySelector('.humidity');
const captionDesc = document.querySelector('.caption');
const today = document.querySelector('.today')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&appid=e01cc28e23298de71ebebd1f654ffdd7&units=imperial';
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
    let currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
    today.textContent = currentdate
    humidity.textContent = ` ${weatherData.main.humidity}`;
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const desc = weatherData.weather[0].description;
    const arr = desc.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const desc2 = arr.join(" ");
    captionDesc.textContent = desc2;

};

