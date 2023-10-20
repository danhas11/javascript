var celsiusValue = 12;
var fahrenheitValue = 68;

var celsiusTemperature = (celsiusValue * 9 / 5) + 32;
var fahrenheitTemperature = (fahrenheitValue - 32) * 5 / 9;
document.write(celsiusValue + "°C is " + celsiusTemperature + "°F" + "<br>" + fahrenheitValue + "°F is " + fahrenheitTemperature + "°C");