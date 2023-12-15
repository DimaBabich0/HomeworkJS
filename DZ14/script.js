window.addEventListener('DOMContentLoaded', getWeather);

const input = document.querySelector("#userCity");
let value; 
input.addEventListener("focus", () => value = getCityValue());
input.addEventListener("blur", () => checkCityValue(value));

function getCityValue()
{
    return input.value;
}
function checkCityValue(value)
{
    if(value != input.value)
    {
        getWeather();
    }
    else return;
}

function getWeather()
{
    const apiKey = '3a5b8c57ba9796882ea63fc5704c505a';

    const city = input.value;
    const weatherElement = document.getElementById('weather');
    const iconw = document.createElement("img");
    const cit = document.getElementById('city');
    weatherElement.innerHTML = `${city}`;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Отправляем GET-запрос к API
    fetch(url).then((response) => response.json()).then((data) => {
        weatherElement.innerHTML = `Ошибка. Город не найден.`;
        const temperature = data.main.temp;
        const ct = data; // весь объект - результат
        const description = data.weather[0].description;
        const icn = data.weather[0].icon;
        const country = data.sys.country;

        const dateSunrise = new Date(data.sys.sunrise  * 1000);
        const timeSunrise = `${dateSunrise.getHours()}:${("0" + dateSunrise.getMinutes()).substr(-2)}:${("0" + dateSunrise.getSeconds()).substr(-2)}`;
        
        const dateSunset = new Date(data.sys.sunset * 1000);
        const timeSunset = `${dateSunset.getHours()}:${("0" + dateSunset.getMinutes()).substr(-2)}:${("0" + dateSunset.getSeconds()).substr(-2)}`;

        cit.innerText = data.name;

        iconw.src = `https://openweathermap.org/img/wn/${icn}.png`
        weatherElement.innerHTML = `Страна: ${country}<br>`;
        weatherElement.innerHTML += `Время рассвета солнца: ${timeSunrise}<br>`;
        weatherElement.innerHTML += `Время заката солнца: ${timeSunset}<br>`;
        weatherElement.innerHTML += `Текущая температура: ${temperature}°C<br>`;
        weatherElement.innerHTML += `Описание: ${description}`;
        weatherElement.append(iconw);
    })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
        });
}