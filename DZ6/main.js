function Task1()
{
    class Car
    {
        #manufacturer;
        #model;
        #year;
        #averageSpeed;

        constructor(manufacturer, model, year, averageSpeed)
        {
            this.#manufacturer = manufacturer;
            this.#model = model;
            this.#year = year;
            this.#averageSpeed = averageSpeed;
        }

        showInfo()
        {
            alert(`Производитель: ${this.#manufacturer}\nМодель: ${this.#model}\nГод выпуска: ${this.#year}\nСредняя скорость: ${this.#averageSpeed} км/ч`)
        }

        calculateTimeDistance(distance)
        {
            const InitialDistance = distance;
            const TimeBetweenRest = 4;
            const TimeToRest = 1;

            let hours = 0;
            let i = 0;
            while (distance > 0)
            {
                distance -= this.#averageSpeed;
                hours++;
                i++
                if(i % TimeBetweenRest == 0 && distance > 0)
                {
                    hours += TimeToRest;
                    i = 0;
                }
            }
            alert(`Для преодоления ${InitialDistance} км с перерывом в ${TimeToRest} час между ${TimeBetweenRest} часами езды составляет ${hours} час`);
        }
    }

    let car = new Car("Audi", "A6", 2011, 45);
    car.showInfo();

    let userDistance = prompt("Введите расстояние в км: ")
    car.calculateTimeDistance(userDistance);
}

function Task2()
{
    class Fraction
    {
        #numerator;
        #denominator;

        constructor(numerator, denominator)
        {
            this.#numerator = numerator;
            this.#denominator = denominator;
        }

        gcd(n, m) 
        {
            return m == 0 ? n : this.gcd(m, n % m);
        } 
        nok(n, m) 
        {
            return n * m / this.gcd(n, m);
        }

        get numerator()
        {
            return this.#numerator;
        }
        get denominator()
        {
            return this.#denominator;
        }
        set numerator(num)
        {
            this.#numerator = num;
        }
        set denominator(num)
        {
            this.#denominator = num;
        }

        showFraction()
        {
            return (`${this.#numerator} / ${this.#denominator}`);
        }

        additionFraction(secondFraction) 
        {
            if(this.#denominator == secondFraction.#denominator)
            {
                return new Fraction(this.#numerator + secondFraction.numerator, this.#denominator); 
            }
            else
            {
                const NOK = this.nok(this.#denominator, secondFraction.denominator);
                const FirstMultiplier = NOK / this.#denominator;
                const SecondMultiplier = NOK / secondFraction.denominator;
                return new Fraction((this.#numerator * FirstMultiplier) + (secondFraction.numerator * SecondMultiplier), this.#denominator * FirstMultiplier); 
            }
        };

        subtractionFraction(secondFraction) 
        {
            if(this.#denominator == secondFraction.denominator)
            {
                return new Fraction(this.#numerator + secondFraction.numerator, this.#denominator); 
            }
            else
            {
                const NOK = this.nok(this.#denominator, secondFraction.denominator);
                const FirstMultiplier = NOK / this.#denominator;
                const SecondMultiplier = NOK / secondFraction.denominator;
                return new Fraction((this.#numerator * FirstMultiplier) - (secondFraction.numerator * SecondMultiplier), this.#denominator * FirstMultiplier); 
            }
        };

        reductionFraction() 
        {
            let temp = this;
            let integer = 0;
            while (temp.numerator >= temp.denominator)
            {
                temp.numerator -= temp.denominator;
                integer++;
            }
            if(temp.numerator == 0)
                return integer;
            else
                return `${integer} (${temp.numerator}/${temp.denominator})`;
        };
    }

    let fraction1 = new Fraction(7,12);
    let fraction2 = new Fraction(5,18);
    let result = fraction1.additionFraction(fraction2);
    alert(`(${fraction1.showFraction()}) + (${fraction2.showFraction()}) = ${result.showFraction()}`);
    result = fraction1.subtractionFraction(fraction2);
    alert(`(${fraction1.showFraction()}) - (${fraction2.showFraction()}) = ${result.showFraction()}`);
    let fraction3 = new Fraction(20,9);
    result = fraction3.reductionFraction();
    alert(`(${fraction3.showFraction()}) = ${result}`);
}

function Task3()
{
    class Time
    {
        #hours;
        #minutes;
        #seconds;

        constructor(hours, minutes, seconds) 
        {
            this.#hours = hours;
            this.#minutes = minutes;
            this.#seconds = seconds;
        }

        showTime()
        {
            if(this.#seconds > 60)
            {
                while(this.#seconds > 60)
                {
                    this.#seconds -= 60;
                    this.#minutes++;
                }
            }
            if(this.#minutes > 60)
            {
                while(this.#minutes > 60)
                {
                    this.#minutes -= 60;
                    this.#hours++;
                }
            }
            if(this.#hours > 24)
            {
                while(this.#hours > 24)
                {
                    this.#hours-=24;
                }
            }

            let h = (this.#hours < 10) ? "0" + this.#hours : this.#hours;
            let m = (this.#minutes < 10) ? "0" + this.#minutes : this.#minutes;
            let s = (this.#seconds < 10) ? "0" + this.#seconds : this.#seconds;
            return (`${h}:${m}:${s}`);
        }


        addSeconds(numSec)
        {
            this.#seconds += numSec;
            if(this.#seconds > 60)
            {
                while(this.#seconds > 60)
                {
                    this.#seconds -= 60;
                    this.#minutes++;
                }
            }
            return "";
        }

        addMinutes(numMin)
        {
            this.#minutes += numMin;
            if(this.#minutes > 60)
            {
                while(this.#minutes > 60)
                {
                    this.#minutes -= 60;
                    this.#hours++;
                }
            }
            return "";
        }

        addHours(numHours)
        {
            this.#hours += numHours;
            if(this.#hours > 24)
            {
                while(this.#hours > 24)
                {
                    this.#hours -= 24;
                }
            }
            return "";
        }
    }

    let fraction1 = new Time(1, 90, 90);
    alert(`Создание объекта с параметрами (1, 90, 90) = ${fraction1.showTime()}`);
    alert(`Добавление 200 секунд = ${fraction1.addSeconds(200)} ${fraction1.showTime()}`);
    alert(`Добавление 200 минут = ${fraction1.addMinutes(200)} ${fraction1.showTime()}`);
    alert(`Добавление 10 часов = ${fraction1.addHours(200)} ${fraction1.showTime()}`);
}

// Task1();
// Task2();
// Task3();