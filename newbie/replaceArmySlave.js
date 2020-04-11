var Vova = "1999/06/12 cash = 4000$ 1999/06/12 1999/06/12 1999/06/12 ";
var replace = /\d{4}\/(\d){2}\/\d{2}/g;
var money = /\d{4}\$/g;
var newCash = Vova.replace(money,"300$");
var newSolder = newCash.replace(replace,'2003/08/11');
    alert(newSolder);
