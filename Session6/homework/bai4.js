function celsiusToFahrenheit(temperature) {
    let fahrenheit = temperature * 1.8 + 32
    console.log(`${temperature}°C is ${fahrenheit}°F`);
}
let result = celsiusToFahrenheit(80)

function fahrenheitToCelsius(fahrenheit) {
    let temperature = (fahrenheit - 32) / 1.8
    console.log(`${fahrenheit}°F is ${temperature}°C`);
}
let af = fahrenheitToCelsius(90)