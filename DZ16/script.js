$(document).ready(weather5Days);

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
        weather5Days();
    }
    else return;
}

function weather5Days()
{
    const apiKey = '3a5b8c57ba9796882ea63fc5704c505a';
    const city = input.value;
    const urlCity = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    // Отправляем GET-запрос к API
    fetch(urlCity).then((response) => response.json()).then((data) => {
        let array = new Array();

        for (let i = 0; i < 5; i++) 
        {
            let date = new Date();
            date.setDate(date.getDate() + i);
            date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; 

            data.list.forEach(element => 
            {
                if(element.dt_txt == `${date} 21:00:00`)
                    array.push(element);
            });
        }

        const weatherElements = document.querySelectorAll('#weather');
        const cit = $('city');

        //const iconw = document.createElement("img");

        for (let i = 0; i < array.length; i++) 
        {
            const forecast = array[i];
            const element = weatherElements[i];

            const iconw = document.createElement("img");
            const icn = forecast.weather[0].icon;
            iconw.src = `https://openweathermap.org/img/wn/${icn}.png`


            const temperature = forecast.main.temp;
            
            const dateYear = forecast.dt_txt.slice(0,4);
            const dateMonth = forecast.dt_txt.slice(5,7);
            const dateDay = forecast.dt_txt.slice(8,10);
        
            const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            const checkWeek = new Date(forecast.dt_txt);

            $("#city").text(`${city}`);

            element.innerHTML = `${dateDay}.${dateMonth}.${dateYear}<br>`;
            element.innerHTML += `<p>${week[checkWeek.getDay()]}</p>`;
            element.append(iconw);
            element.innerHTML += `<p>${forecast.weather[0].description}</p>`
            element.innerHTML += `<p>${temperature}°C</p>`;
        }
    })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
        });
}