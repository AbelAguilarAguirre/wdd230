const weather = document.querySelector('.weather')
const Forcasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&appid=e01cc28e23298de71ebebd1f654ffdd7&units=imperial';
async function apiFetch() {
    try {
        const response = await fetch(Forcasturl);
        if (response.ok) {
            const data = await response.json();
            for (let i = 0; i < 3; ++i) {
                displayForcast(data, i);}
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};
apiFetch();

function displayForcast(data, i) {
    date.setDate(tomorrow.getDate()+ i)
    let forecastDate = date
    let dia = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(forecastDate);
    let div = document.createElement("div")
    div.setAttribute('class', 'day')
    let h2 = document.createElement("h2")
    h2.textContent = `Temp: ${data.list[i].main.temp.toFixed(0)}°F`
    let h3 = document.createElement("h3")
    h3.textContent = dia

    div.appendChild(h3)
    div.appendChild(h2)
    weather.appendChild(div)
};

