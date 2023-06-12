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



}) // end of weather fetch
}) //end of event listener