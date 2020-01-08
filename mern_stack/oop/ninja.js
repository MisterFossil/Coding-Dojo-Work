class Ninja {
    constructor(name, health)
    {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() 
    {
        console.log(this.name);
    }

    showStats() 
    {
        this.sayName();
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
    }

    drinkSake()
    {
        this.health += 10;
    }

}

const ninja1 = new Ninja("Jon", 5);
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.sayName();