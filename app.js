//get the weather data bby city namme where city name is london

fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=5419af2550f5eec4fc8eee39304f4f76')
.then(res => res.json())
.then(data => console.log(data.weather[0].description))

//get the weather data by city id

fetch('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=5419af2550f5eec4fc8eee39304f4f76')
.then(res => res.json())
.then(data => console.log(data.weather[0].description))

//get the weather data by lat lang
fetch('http://api.openweathermap.org/data/2.5/weather?lat=55.5&lon=37.5&appid=5419af2550f5eec4fc8eee39304f4f76')
.then(res => res.json())
.then(data => console.log(data.weather[0].description))