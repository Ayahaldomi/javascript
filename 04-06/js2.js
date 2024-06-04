/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
let x = prompt("Please enter your Grade");

if (x>=90 && x<=100){
    window.alert("Your average is A");
}
else if(x<=89 && x>=80){
    window.alert("Your average is B");
}
else if(x<=79 && x>=70){
    window.alert("Your average is C");
}
else if(x<=69 && x>=60){
    window.alert("Your average is D");
}
else if(x<=59 && x>=50){
    window.alert("Your average is E");
}
else if(x<=50){
    window.alert("You Failed");
}
