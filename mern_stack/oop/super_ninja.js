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

class Sensei extends Ninja
{
    constructor(name)
    {
        super(name,200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdon()
    {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdon();
superSensei.showStats();