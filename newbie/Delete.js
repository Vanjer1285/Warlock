var ourFirstFunction = function () {
    console.log("Привет, мир!");
};
ourFirstFunction();
var sayHelloTo = function (x) {
    console.log("Привет, " + x + "!"); };
sayHelloTo("Ник");
var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};
printMultipleTimes(2,"=_=");
var double = function (number) {
    return number * 2;
};
double(3);
var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

var generateRandomInsult = function () {
    var randomBodyParts = ["глаз", "нос", "череп"];
    var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    return "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
};
console.log(generateRandomInsult());
var fifthLetter = function (name) {
    if (name.length < 5) {
}
return "Пятая буква вашего имени: " + name[4] + ".";
};
function calculate(n1,n2,operation) {
    var result = eval(n1+operation+n2);
    return result;
}
function ukraine(toCalculate) {
    try{
        var result = eval(toCalculate);
        return result;
    }catch (e) {
        return "WTF U DOING?!"
   }
}
function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
function areArraySame(array1, array2) {
    if (array1.length === array2.length) {
        return true;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]){
            return false;
        }
    }
    return true
}




