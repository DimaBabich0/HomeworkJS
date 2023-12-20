$(document).ready(weather5Days);
$(document).ready(function () {
    $("#btn2").click(function () {
        if($("#blocks").is(":visible"))
        {
            $('#blocks').slideUp(1000, function() {
                $("#btn2").val("↓");
            });
        }
        else
        {
            $('#blocks').slideDown(1000, function() {
                $("#btn2").val("↑");
            });
        }
    });
});

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

    fetch(urlCity).then((response) => response.json()).then((data) => {
        let array = new Array();

        //get elements from request
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

        console.log(array[0]);

        const outputMain = $("#block");
        const outputOther = $("#blocks");
        outputMain.empty();
        outputOther.empty();
        
        $("#city").text(`${city}`);

        renderWeather(array[0], outputMain);
        for (let i = 1; i < array.length; i++) 
        {
            const forecast = array[i];
            renderWeather(forecast, outputOther);
        }
    })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
        });
}

function renderWeather(element, output)
{
    //icon
    const iconw = document.createElement("img");
    const icn = element.weather[0].icon;
    iconw.src = `https://openweathermap.org/img/wn/${icn}.png`

    //temperature
    const temperature = element.main.temp;
    
    //date
    const dateYear = element.dt_txt.slice(0,4);
    const dateMonth = element.dt_txt.slice(5,7);
    const dateDay = element.dt_txt.slice(8,10);

    //day of week
    const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const checkWeek = new Date(element.dt_txt);

    //render
    const div = document.createElement("div");
    div.classList.add("weather");
    div.innerHTML = `${dateDay}.${dateMonth}.${dateYear}<br>`;
    div.innerHTML += `<p>${week[checkWeek.getDay()]}</p>`;
    div.append(iconw);
    div.innerHTML += `<p>${element.weather[0].description}</p>`
    div.innerHTML += `<p>${temperature}°C</p>`;
    output.append(div);
}