class AnimalWorld
{
    #array = new Array();

    constructor(...spread)
    {
        for (let i in spread) 
        {
            this.#array.push(spread[i]);
        }
    }

    Cycle()
    {
        console.log(`Before eating: `);
        this.showInfo();
        this.Meals_herbivores();
        this.Nutrition_carnivores();
        
        console.log(` `);
        console.log(`After eating: `);
        this.showInfo();

    }

    showInfo()
    {
        this.#array.forEach(element => {
            element.showInfo();
            console.log(`--------------------`);
        });
    }

    Meals_herbivores()
    {
        this.#array.forEach(element => {
            element.HerbEatGrass();
        });
    }

    Nutrition_carnivores()
    {
        this.#array.forEach(element => {
            element.CarnEat();
        });
    }
}

class Continent
{
    #Name;
    #HerbAnimal;
    #CarnAnimal;

    constructor(Name, HerbAnimal, CarnAnimal)
    {
        this.#Name = Name;
        this.#HerbAnimal = HerbAnimal;
        this.#CarnAnimal = CarnAnimal;
    }

    HerbEatGrass()
    {
        this.#HerbAnimal.Eat();
    }
    CarnEat()
    {
        this.#CarnAnimal.Eat(this.#HerbAnimal);
    }

    showInfo()
    {
        console.log(`Continent name = ${this.#Name}`);
        this.#HerbAnimal.showInfo();
        this.#CarnAnimal.showInfo();
    }
}

class Herbivore
{
    #Name;
    #Weight = 50;
    #Life = true;

    constructor(Name, Weight)
    {
        this.#Name = Name;
        this.#Weight = Weight;
    }

    showInfo()
    {
        console.log(`Name = ${this.#Name}; Weight = ${this.#Weight}; Life status = ${this.#Life}`);
    }

    get Weight()
    {
        return this.#Weight;
    }
    get Life()
    {
        return this.#Life;
    }
    set Life(bool)
    {
        this.#Life = bool;
    }

    Eat()
    {
        if(this.#Life != false)
            this.#Weight += 10;
    }
}

class Carnivore
{
    #Name;
    #Power = 60;

    constructor(Name, Power)
    {
        this.#Name = Name;
        this.#Power = Power;
    }

    showInfo()
    {
        console.log(`Name = ${this.#Name}; Power = ${this.#Power}`);
    }

    Eat(Animal)
    {
        if(this.#Power > Animal.Weight && Animal.Life != false)
        {
            Animal.Life = false;
            this.#Power += 10;
        }
        else if (this.#Power < Animal.Weight && Animal.Life != false)
        {
            this.#Power -= 10;
        }
    }
}

let Wildebeest = new Herbivore("Wildebeest", 50);
let Lion = new Carnivore("Lion", 55);
let Africa = new Continent("Africa", Wildebeest, Lion);

let Bison = new Herbivore("Bison", 45);
let Wolf = new Carnivore("Wolf", 60);
let North_America = new Continent("North America", Bison, Wolf);

let Animal_World = new AnimalWorld(Africa, North_America)

console.log(`Cycle 1:`)
Animal_World.Cycle();

console.log(` `);
console.log(` `);
console.log(` `);

console.log(`Cycle 2:`)
Animal_World.Cycle();