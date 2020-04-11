//класс - описание поведения и свойств объекта
class Animal {
    constructor(speed, name) {
    this.speed = speed;
    this.name = name;
    }
    say(){
        alert("меня зовут " + this.name + " у меня нет усов");

    }
    move(){
       alert(this.name+" передвигается со скоростью " + this.speed + " украинцев в секунду");
    }
}
class  Rabbit extends Animal{
    constructor(speed, name, moustaches) {
        super(speed, name);
        this.moustaches = moustaches;
    }
    say(){
        alert("меня зовут " + this.name + " у меня" + this.moustaches + " усов");
    }
    hide(){
        alert("Кролик " + this.name + " прячется");
    }

}
var a  = new Rabbit(150,"Vova",6);
class Player {
    // свойства объекта
    // конструктор - функция, которая вызывается при создании объекта
    constructor(money, HP, attack, yourNickname, avatarLink) {
        this.money = money;
        this.HP = HP;
        this.attack = attack;
        this.nickName = yourNickname;
        this.avatarLink = avatarLink
    }
    // Метод (поведение) объекта
    changeMoney(cost){
        this.money += cost;
    }
    tellAboutMyself(){
        var speech = "Меня зовут " + this.nickName;
        if (this.money <= 0) {
            speech += "\nу меня нет денег :-(";
        } else {
            speech += "\nСоня, мы богаты!";
        }
        if (this.HP <= 50) {
            speech += "\nОчень мало здоровья :-(";
        } else  {
            speech += "\nЧувствую себя отлично!";
        }
        return speech;
    }
}
//  Наследование класса от другого класса -

class Game {
    constructor() {
        this.players = [];
    }
    addNewPlayer(newChar){
        this.players.push(newChar);
    }
}
// var x = document.createElement("IMG");
// x.setAttribute("src","icon/Necromancer.jpg");
// document.body.appendChild(x);
var yourNickname = prompt("Введите ваш Ник");
var necromancer = new Player(150, 50, 30, yourNickname, 'icon/Necromancer.jpg');




var Gremlins = new Game();
alert(playerOne.tellAboutMyself());




// Gremlins.addNewPlayer(Ruslan);
// Gremlins.addNewPlayer(Vova);
// var Ruslan = new Player(150, 51, 21);
// var Vova =  new Player( 200, 40, 31);
// Ruslan.changeMoney(-30);
// alert("" + Ruslan.money + " " + Ruslan.HP + "\n" + Ruslan.tellAboutMyself());