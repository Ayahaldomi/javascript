/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
function large (a, b) {

  if (a>b) {
      return a +" " + "is larger";
  }

  else {
      return  b + " " + "is larger";
    }
  }
  let lar = large (40 , 20)
  document.getElementById("demo").innerHTML = lar;

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  function sign (a, b, c){
    let z = a * b * c 
    
    if (z>0){
      return "the sign is +"
    }
    else{
      return "the sign is -"
    }
  };
  
  let siign = sign(3, -7, 2);
  window.alert(siign);

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let num1 = 0;
let num2 = -1;
let num3 = 4;

let sorted;
if(num1>=num2 && num1>=num3){
  if(num2>=num3){
    sorted = `${num1}, ${num2}, ${num3}`
  }
  else {
    sorted = `${num1}, ${num3}, ${num2}`
  }
}
else if (num2>=num1 && num2>=num3) {
  if(num1>=num3){
    sorted = `${num2}, ${num1}, ${num3}`
  }
  else {
    sorted = `${num2}, ${num3}, ${num1}`
  }
}
else if (num3>=num1 && num3>=num2) {
  if(num1>=num2){
    sorted = `${num3}, ${num1}, ${num2}`
  }
  else {
    sorted = `${num3}, ${num2}, ${num1}`
  }
}
window.alert(sorted);
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let NUM1 = -5;
let NUM2 = -2;
let NUM3 = -6;
let NUM4 = 0;
let NUM5 = -1;

  if (NUM1>NUM2 && NUM1>NUM3 && NUM1>NUM4 && NUM1>NUM5){
    window.alert(NUM1)
  }
  else if (NUM2>NUM1 && NUM2>NUM3 && NUM2>NUM4 && NUM2>NUM5){
    window.alert(NUM2)
  }
  else if (NUM3>NUM1 && NUM3>NUM2 && NUM3>NUM4 && NUM3>NUM5){
    window.alert(NUM3)
  }
  else if (NUM4>NUM1 && NUM4>NUM2 && NUM4>NUM3 && NUM4>NUM5){
    window.alert(NUM4)
  }
  else if (NUM5>NUM1 && NUM5>NUM2 && NUM5>NUM3 && NUM5>NUM4){
    window.alert(NUM5)
  }
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  let x = 5 
  let y = 7 
  if (x>y){
    console.log("hello world")
  }
  else{
    console.log("Goodbye")
  }
 /******* End Your Code ********* */
