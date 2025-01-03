let form = document.getElementById('container');

form.addEventListener("submit", function (event){
    event.preventDefault();

    let city = document.getElementById("city").value;
    console.log(city);

    getWeather(city).then((response) => {
        console.log(response)

        const { main, clouds, wind, sys, weather } = response;

        if (!main || !clouds || !wind || !sys || !weather) {
            const errorCity = document.querySelector(".cityError");
            errorCity.textContent = "City not found!";
            errorCity.style.display = "block";
            return;
        }

        document.querySelector(".cityError").style.display = "none";

        const section = document.querySelector(".temp");
        section.style.display = "flex";

        const minTemp = document.querySelector(".min-temp");
        minTemp.textContent = Math.round(main.temp_min - 273.15);

        const maxTemp = document.querySelector(".max-temp");
        maxTemp.textContent = Math.round(main.temp_max - 273.15);

        const curTemp = document.querySelector(".cur-temp");
        curTemp.textContent = Math.round(main.temp - 273.15);

        const humidity = document.querySelector(".humidity");
        humidity.textContent = main.humidity;

        const pressure = document.querySelector(".pressure");
        pressure.textContent = main.pressure;

        const Clouds = document.querySelector(".clouds");
        Clouds.textContent = clouds.all;

        const Wind = document.querySelector(".wind");
        Wind.textContent = wind.speed;

        const Sys = document.querySelector(".sys");
        Sys.textContent = sys.country;

        const Weather = document.querySelector(".weather");
        Weather.textContent = weather[0].description;
    })
});

clearBtn.addEventListener("click", function () {
    console.clear();

    document.getElementById("city").value = ''; 

    const section = document.querySelector(".temp");
    section.style.display = "none";

    const minTemp = document.querySelector(".min-temp");
    const maxTemp = document.querySelector(".max-temp");
    const curTemp = document.querySelector(".cur-temp");
    const humidity = document.querySelector(".humidity");
    const pressure = document.querySelector(".pressure");
    const Clouds = document.querySelector(".clouds");
    const Wind = document.querySelector(".wind");
    const Sys = document.query 

    const errorCity = document.querySelector(".cityError");
    errorCity.style.display = "none";
});



function getWeather(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=736a55167511dd585ba5eb3b0cce0f85`)
    .then((response) => response.json());
}