function Task1()
{
    function MinMax(num1, num2)
    {
        if (Math.min(num1, num2) == num1)
            return -1;
        else if (Math.min(num1, num2) == num2)
            return 1;
        return 0;
    }
    alert(`Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны. Числа 5 и 10 = ${MinMax(5,10)}`);
}

function Task2()
{
    function Factorial(num) 
    {
        return (num != 1) ? num * Factorial(num - 1) : 1;
    }
    alert(`Написать функцию, которая вычисляет факториал переданного ей числа. Факториал числа 5 = ${Factorial(5,10)}`);
}

function Task3()
{
    function GetTogether(num1, num2, num3)
    {
        return num1.toString() + num2.toString() + num3.toString();
    }
    alert(`Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Цифры 1, 4, 9 = ${GetTogether(1, 4, 9)}`);
}

function Task4()
{
    function RectangleSquareArea()
    {
        if(arguments.length == 2)
        {
            return `Площадь прямоугольника = ${arguments[0] * arguments[1]}`;
        }
        else if(arguments.length == 1)
        {
            return `Площадь квадрата = ${arguments[0] * arguments[0]}`;
        }
        else
        {
            return "Неверное количество параметров";
        }
    }
    alert(`Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата. Вызов с 2 параметрами (5, 10) = ${RectangleSquareArea(5, 10)}, вызов с 1 параметром (5) = ${RectangleSquareArea(5)}`);
}

function Task5()
{
    function IsPerfect(num)
    {
        let sum = 0;
        for(let i = 0; i <= num; i++)
        {
            if(num % i == 0)
            {
                if(i != num)
                {
                    sum += i;
                }
            }
        }

        if(num == sum)
        {
            return true;
        }
        else
        {    
            return false;
        }
    }
    alert(`Написать функцию, которая проверяет, является ли переданное ей число совершенным. Число 28 = ${IsPerfect(28)}`);
}

function Task6()
{
    function IsPerfect(num)
    {
        let sum = 0;
        for(let i = 0; i <= num; i++)
        {
            if(num % i == 0)
            {
                if(i != num)
                {
                    sum += i;
                }
            }
        }

        if(num == sum)
        {
            return true;
        }
        else
        {    
            return false;
        }
    }
    function RangePerfect (min, max)
    {
        let arr = [];
        for(let i = min; i <= max; i++)
        {
            if(IsPerfect(i) == true)
            {
                arr.push(i);
            }
        }
        return arr;
    }
    alert(`Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Числа от 1 до 30 = ${RangePerfect(1,30)}`);
}

function Task7()
{
    function GetTime(hour, minutes = 0, seconds = 0)
    {
        if(seconds > 59)
        {
            minutes += Math.floor(seconds / 60);
            seconds %= 60;
        }
        if(minutes > 59)
        {
            hour += Math.floor(minutes / 60);
            minutes %= 60;
        }
        if(hour >= 24)
        {
            hour %= 24;
        }

        if(minutes < 10)
        {
            minutes = "0" + minutes;
        }
        if(seconds < 10)
        {
            seconds = "0" + seconds;
        }
        return (`${hour}.${minutes}.${seconds}`);
    }
    alert(`Написать функцию, которая принимает время и выводит его на экран в формате «чч:мм:сс». Время 11:5 = ${GetTime(11,5)}`);
}

function Task8()
{
    function GetSeconds(hour, minutes, seconds)
    {
        return (hour * 3600) + (minutes * 60) + seconds;
    }
    alert(`Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах. Время 11:30:50 = ${GetSeconds(11,30,50)}`);
}

function Task9()
{
    function SecondsToTime(num) 
    {
        let hour = Math.floor(num / 3600);
        let minutes = Math.floor((num % 3600) / 60);
        let seconds = num % 60;
        return (`${hour}.${minutes}.${seconds}`);
    }
    alert(`Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс». Секунд 55555 = ${SecondsToTime(55555)}`);
}

// Task1();
// Task2();
// Task3();
// Task4();
// Task5();
// Task6();
// Task7();
// Task8();
// Task9();