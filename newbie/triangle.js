function trianglePar (array){
    var sides = "";
    var angled = "";
    if (array.slice(0,3).some(number => number < 0))

    {
    return "You triangle have a negative number!"
    }
    //first three numbers !=0 , next three numbers summ == 180
    //if no one of angles < 90 - triangle is acute-angled triangle and >90 - obtuse-angled triangle , if one of angle == 90 - Right-angled triangle.
    //if two sides of triangle are equal - isosceles triangle, if three sides of triangle are equal - equilateral triangle
    return `You have ${sides} ${angled} triangle (${array})`
}
function angleSumm(array) {
    var sum=0;
    for(var i=3;i < array.length;i++){
        sum = sum + parseInt(array[i]);
    } return sum;
}
var writeText = prompt("Write your triangle parametres");
var arr = writeText.split(",");
alert(trianglePar(writeText));
var a  = ["1","2"];
[1,2];
alert = +a