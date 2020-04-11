class Character {
    constructor(cash,income, mana, hp, soul, spell) {
        this.cash = cash;
        this.income = income;
        this.mana = mana;
        this.hp = hp;
        this.soul = soul;
        this.spell = spell;
        this.debuff = false;

    }
    changeMoney(value){
        this.cash += value
    }
    changeMana(manacost){
        this.mana += manacost
    }
    changeHP(){
        if(this.hp == 0){
            this.debuff = true;
        }
    }
    changeSoul(soulcost){
        this.soul += soulcost
    }
    useSpell(){}
    setDebuff(){}


}

// snitch - 

var snitch = new Character(150,20,13,13); // + SpellNAME);
// frost -
var frost = new
// madness -



// Summoner -
    class Summoner extends Character{
    constructor() {
        super();

    }
    }
var summoner = new Character(150,14,13,1);//

