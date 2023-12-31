let input = document.querySelector('.cityInput');
let submit = document.querySelector(".submitButton");
let city = document.querySelector(".currentCity");
let backgroundImage = document.querySelector("body");

submit.addEventListener('click', function(e) {
e.preventDefault();

const apiKey = '8bbae7804b09e5427b9cb9d69754333e'

    let display = document.querySelector(".weatherContainer");
    while (display.lastChild) {
        display.lastChild.remove();
    }

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=metric&lat={lat}&lon={lon}&appid=${apiKey}`;
    fetch (url)
    .then (response =>response.json())
    .then (data => {
        (console.log(data))

   
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
            let icon = data.list[i].weather[0].icon;
            let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            let results = document.createElement('div')
            results.classList.add('weather')
            results.innerHTML = 
                `<p class = "date">${date}<p>
                <img src=${iconUrl}>
                <p>${description}</p>
                <div class = "minMax">
                    <p>High: ${max}</p>
                    <p>Low: ${min}</p>
                </div>
                <p>Humidity: ${humidity}</p>`
    document.querySelector('.weatherContainer').appendChild(results)

    let cityValue = data.city.name + ', ' + data.city.country
    city.innerHTML = cityValue;

}       // End of loop
})     // End of fetch
});   //End of event listener


const submitButton = document.querySelector(".submitButton")
submitButton.addEventListener("click", background)
function background() {
    const search = document.querySelector(".cityInput").value;
    fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=DUisWwncBCV4C03_pAu3HFVmWEiHCc6W77HLV7-sEls`)
    .then(response => response.json())
    .then(data => {
          const image = data.results[0];
          backgroundImage.style.background = `url(${image.urls.regular})`;
          console.log('image')

        });    //End of fetch 
    };         //End of function