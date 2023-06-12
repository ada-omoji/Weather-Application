let input = document.querySelector('.cityInput');
let submit = document.querySelector(".submitButton");
let city = document.querySelector(".currentCity");
let backgroundImage = document.querySelector("body");

submit.addEventListener('click', function(e) {
    e.preventDefault();

    const apiKey = '8bbae7804b09e5427b9cb9d69754333e'
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=metric&lat={lat}&lon={lon}&appid=${apiKey}`;
    fetch (url)
    .then (response =>response.json())
    .then (data => {
        (console.log(data))

    let display = document.querySelector(".weatherContainer");
    while (display.lastChild) {
        display.lastChild.remove();
    }

    for (let i = 0; i < data.list.length; i+= 8) { //iterate through the list array and retrieve data every 8th index (5 day forecast)     
        let date = new Date(data.list[i].dt * 1000).toLocaleString("en-BE", 
            {
            weekday: "long",
            month: "short",
            day: "2-digit"
             });

             let temperature = data.list[i].main.temp.toFixed(0) +'°C';
             let feelsLike = data.list[i].main.feels_like.toFixed(1) +'°C';
             let min = data.list[i].main.temp_min.toFixed(0) + '°C';
             let max = data.list[i].main.temp_max.toFixed(0)  + '°C';
             let humidity = data.list[i].main.humidity + ' %';
             let description = data.list[i].weather[0].description;
            }

}) // end of weather fetch
}) //end of event listener