function Task1()
{
    const dailyPercent = 10;
    const criticalLimit = 10;
    let userLiters = prompt("Введите количество воды в баке:");
    let dayCounter = 0;
    while(true)
    {
        if(userLiters > 10)
        {
            userLiters -= (userLiters / 100) * dailyPercent;
            dayCounter++;
        }
        else if (userLiters <= 10 )
        {
            alert(`Аварийная ситуация произойдет через ${dayCounter} дней.`)
            break;
        }
    }
}

function Task2()
{
    function sayError()
    {
        alert("Some error occurred!");
    }
    sayError();
}

function Task3()
{
    function showError(x)
    {
        alert(`Error "${x}" occurred!`);
    }
    showError("Out of memory");
}

function Task4()
{
    function createHeaders(N)
    {
        for (let i = 0; i < N; i++) 
            document.write(`<h2>Header${i}</h2><br>`);
    }
    createHeaders(5);
}

function Task5()
{
    function checkPassword(x)
    {
        if (x.indexOf('Step') != -1)
            return true;
        else if (x.indexOf('Web') != -1)
            return true;
        else if (x.indexOf('JavaScript') != -1)
            return true;
        return false;
    }
    alert(`Проверка пароля "PasswordJavaScript1 - ${checkPassword("PasswordJavaScript1")}\nПроверка пароля "Password1 - ${checkPassword("Password1")}`);
}

function Task6()
{
    function sign(x)
    {
        if(parseInt(x) > 0)
            return 1;
        if(parseInt(x) < 0)
            return -1;
        if(parseInt(x) == 0)
            return 0;
        return undefined;
    }
    alert(`Проверка числа 5 = ${sign(5)}\nПроверка числа -3 = ${sign(-3)}\nПроверка числа 0 = ${sign(0)}`);
}

function Task7()
{
    function checkDayWeek(num)
    {
        if (num == 0)
            return "Sunday";
        else if (num == 1)
            return "Monday";
        else if (num == 2)
            return "Tuesday";
        else if (num == 3)
            return "Wednesday";
        else if (num == 4)
            return "Thursday";
        else if (num == 5)
            return "Friday";
        else if (num == 6)
            return "Saturday";
        return undefined;
    }
    alert(`Проверка числа 5 - ${checkDayWeek(5)}`);
}

Task1();
Task2();
Task3();
Task4();
Task5();
Task6();
Task7();