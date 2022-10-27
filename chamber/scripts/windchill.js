//wind chill calculator
const temperature = parseFloat(document.querySelector("#temperature").textContent);
const windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);
let windChill = document.querySelector("#windChill");

let result = 0;
if (temperature <=50 && windSpeed > 3) {
    result = 35.74 + 0.6215 * temperature - 35.75 * (windSpeed**0.16) + 0.4275 * temperature * (windSpeed**0.16)
    windChill.textContent = result.toFixed(2) + "°F";
} else {
    windChill.textContent = "N/A"
}


console.log(temperature, windSpeed, result)