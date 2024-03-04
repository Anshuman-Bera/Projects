let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let wind = document.getElementById("wind");
let input = document.getElementById("inp");
let API_key = "429969f380762af3342e729f99569cbf"


const data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    city.innerHTML = jsonData.name + ","+jsonData.sys.country;
    type.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    temp.innerHTML = jsonData.weather[0].main;
    wind.innerHTML = "Wind Speed:-" + jsonData.wind.speed;

    if (temp.innerHTML == "Clouds") {
        image.src = "cloud.png"
    }
    else if (temp.innerHTML == "Clear") {
        image.src = "clearsky.png"
    }
    else if (temp.innerHTML == "Haze") {
        image.src = "haze.png"
    }
    else if (temp.innerHTML == "Rain") {
        image.src = "rain.png"
    }
    else if (temp.innerHTML == "Overcast") {
        image.src = "overcast.png"
    }
    else if (temp.innerHTML == "Thunderstorm") {
        image.src = "strom.png"
    }
    else if (temp.innerHTML == "Smoke") {
        image.src = "snow.png"
    }
};

function myfun() {
    search = input.value;
    data(search);

};