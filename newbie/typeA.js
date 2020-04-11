var number = prompt("write your number");
var regExp = /\d/g;
var digitsArray = number.match(regExp);
var summ = 0;

for(var i = 0; i != digitsArray.length; i++ ) {
    summ = summ + +digitsArray[i];

}
alert(summ);