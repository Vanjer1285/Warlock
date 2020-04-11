// var arr =["Horde","Sosat","!"];
// for (var i = 0  ; i < arr.length; i++) {
//     alert (arr[i]);
// }
// alert(arr[2]);

/*

while (condition) {
    f();
}

 */
/*var cat1 = {
    tailLenght : 10,
    pows: 4
};
var cat2 = {
    tailLenght : 5,
    pows: 4
};
var orc = {
    health: 10,
    attack: 5
};
// Так делать не стоит. в случае превращения объекта в строку он просто отобразится как [Object object]
alert(cat2);
//вызов функции библиотеки JSON, которая принимает объект и возвращает объект в виде строки
alert(JSON.stringify(cat2));
function printCat(cat) {
    return `Я кот у меня хвост длиной ${cat.tailLenght}см и ${cat.pows} лапы.`;
    //return "Я кот у меня хвост длиной " + cat.tailLenght + "см и " + cat.pows + " лапы.";
}

alert(printCat(cat1));*/




var character1 = {
    name: "Vanjer",
     health: 4,
    attack: 1,
    initiative: 0
};
var character2 = {
    name: "Phobos",
    health: 2,
    attack: 2,
    initiative: 99
};
var character3 = {
    name: "Tahir",
    health: 99,
    attack: 1,
    initiative: 1
};
//a -= 3
// a = a - 3


var winner = whoWins(character1,character3);
winner = whoWins(character2,winner);

function whoWins(character1,character2) {

    if (character1.initiative < character2.initiative){
        var bufferObmena = character1;
        character1 = character2;
        character2 = bufferObmena;
    }

    while (character2.health > 0 && character1.health > 0) {

        character2.health -= character1.attack;

        if (character2.health <= 0) {
            break;
        }

        character1.health -= character2.attack;

    }

    if (character1.health > character2.health) {
        alert(character1.name + " wins");
        return character1
    } else {
        alert(character2.name + " wins");
        return character2
    }


}
alert(winner.name+" wins with "+winner.health+"!");
