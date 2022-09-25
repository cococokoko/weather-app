// Transform Kelvin degrees to Celsisu
export function kelvinToCelsius(temperature) {
    return parseFloat((temperature - 273.15).toFixed(2));
}
