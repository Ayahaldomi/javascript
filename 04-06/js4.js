/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// function tellFortune(x, y, z, n){
//    return " You will be a " + x + " in " + y + ", and married to " + z + " with " + n + " kids."
// };
// let fortune = tellFortune('software engineer', 'Jordan', 'Alice', 3);
// window.alert(fortune)
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age){
   NN = age * 7
return "Your doggie is " + NN + " years old in dog years!"
}
let dog = calculateDogAge(1);
console.log(dog)
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply (age, X){
    if (age<= 100){
    aged = age * 365
    cup = aged * X 
    return "You will need " + cup + " cups to last you until the ripe old age of " + age;
    }
    else{
        return "You are too old"
    }
}
let cups = calculateSupply(30, 3);
console.log (cups)


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
    return "Hello " + name
}
let hello = greet("Adam");
console.log(hello)

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
// parameter is not used in code/////////

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
// num is a string
*/



/*
6
fix these functions:
function double1(x) {
  return 2 * x ;
}///////////////

function double2 (x){
return 2 * x;
}////////////////

function double3 (x) {
  return 2 * x;
}
/////////////////////
*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num1){
    cubeof = num1 * num1 * num1 
    return cubeof
}
let wcube = cube(4)
console.log(wcube)

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(p, o){
    return p * o
}
let multiply1 = multiply(3, 4)
console.log(multiply1)

let multiply2 = multiply(5, 4)
console.log(multiply2)

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
    if (age >=20){
        return "yes you can"
    }
    else {
        age1 = 20 - age
        return "please come back after " + age1 + " years to get one"
    }
}
let cal1 = canIGetADrivingLicense(21)
console.log(cal1)
let cal2 = canIGetADrivingLicense(17)
console.log(cal2)
let cal3 = canIGetADrivingLicense(20)
console.log(cal3)
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(one, two){
    if(one.length != two.length ){
        return "false"
    }
    else{
        return "true"
    }

}
console.log(sameLength("tree", "car"))
console.log(sameLength("tree", "clue"))
/*/////////////////////////////////////////////////////
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(e, r){
    if (e > r){
        return e
    }
    else{
        return r
    }
}
let er = largerNubmer(5,6);
console.log(er)
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(y, u, i){
    if (y < u && y < i){
        return y
    }
    else if (u < y && u< i){
        return u
    }
    else if (i < y && i < u){
        return i
    }
}
let yui = smallerNubmer(5,99,34);
console.log(yui)
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(str1, str2, str3, str4, str5) {
    if (str1.length <= str2.length &&
        str1.length <= str3.length &&
        str1.length <= str4.length &&
        str1.length <= str5.length) {
      return str1;
    } else if (str2.length <= str1.length &&
               str2.length <= str3.length &&
               str2.length <= str4.length &&
               str2.length <= str5.length) {
      return str2;
    } else if (str3.length <= str1.length &&
               str3.length <= str2.length &&
               str3.length <= str4.length &&
               str3.length <= str5.length) {
      return str3;
    } else if (str4.length <= str1.length &&
               str4.length <= str2.length &&
               str4.length <= str3.length &&
               str4.length <= str5.length) {
      return str4;
    } else {
      return str5;
    }
  }
  console.log(shorterString("air","school","car","by","github"));
  
  console.log(shorterString("by","tr","car","air","github"));
  
  console.log(shorterString("air","tr","car","github","by"));
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(st1, st2, st3, st4){
    if (st1.length>=st2.length && st1.length>=st3.length && st1.length>= st4.length){
        return st1
    }
    else if (st2.length>=st1.length && st2.length>=st3.length && st2.length>= st4.length){
        return st2
    }
    else if (st3.length>=st1.length && st3.length>=st2.length && st3.length>=st4.length){
        return st3
    }
    else if (st4.length>=st1.length && st4.length>=st2.length && st4.length>=st3.length){
        return st4
    }
}
console.log(longerString("air","school","car","github"))
console.log(longerString("air","scoo","car","github"))
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(h){
    if (h % 2 == 0){
        return true
    }
    else{
        return false
    }
}
console.log(isEven(1))
console.log(isEven(2))
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isodd(g){
    if (g % 2 == 0){
        return false
    }
    else{
        return true
    }
}
console.log(isodd(4))
console.log(isodd(5))

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(s){
    d = Math.abs(s)
    return d 
}
console.log(positive(-5))
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(p, o){
    return p + " " + o
}
console.log(fullName("Adam","McCallen"))
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average (q, w, e, r, t){
    return (q+w+e+r+t)/5
}
console.log(average(1,2,3,4,5))
/*
// 20
// Write a function called randomNumber
// that didnt takes any parameter
// and returns a random number between 0-1
// ** hint: you can seacrh using MDN

// Ex: randomNumber()
// => 0.2278

// Ex: randomNumber()
// => 0.475

// */
function randomNumber(){
    return Math.random() ;
}
console.log(randomNumber())
// /*
// 21
// Write a function called randomBetweenNumbers
// that takes 2 parameters
// and returns a random number between them
// ** hint: you can seacrh using MDN

// Ex: randomBetweenNumbers(1,8)
// => 7.5412

// Ex: randomBetweenNumbers(3,100)
// => 23

// */
function randomBetweenNumbers(max, min){
    return Math.random() * (max - min) + min;
}
console.log(randomBetweenNumbers(1,8))

// /*
// 22
// Write a function called scoreInUniversty
// that takes 1 parameters
// and returns the alpabet in the unevirsty
// A => 95-100
// B => 85-94
// C => 70-84
// D=> 50-69
// F=> 0-49

// Ex: scoreInUniversty(96)
// => "A"

// Ex: scoreInUniversty(3)
// => "F"

// Ex: scoreInUniversty(71)
// => "C"
// */
function scoreInUniversty(x){
    if (x>=95 && x<=100){
        return "A"
    }
    else if(x<=94 && x>=85){
        return "B"
    }
    else if(x<=84 && x>=70){
        return "C"
    }
    else if(x<=69 && x>=50){
        return "D"
    }
    else if(x<=49 && x>=0){
        return "F"
    }

}
console.log(scoreInUniversty(96))
console.log(scoreInUniversty(3))
console.log(scoreInUniversty(71))
// /*
// 23
// Write a function called counter
// that will returns a number bigger
// than the one that returnd before
// and start from 0

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: counter()
// => 3

// */

function createCounter1() {
    let count = 0; 

    return function() {
        return count++; 
    };
}

const counter = createCounter1();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// /*
// 24
// Write a function called resetCounter
// that will reset the previuos function
// and return the number before reset and
// a string say that the counter reset

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: counter()
// => 3

// Ex: resetCounter()
// => 3 and the counter reset now

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: resetCounter()
// => 2 and the counter reset now

// Ex: counter()
// => 1
// //
function createCounter() {
    let count = 0; // Initialize count to 0

    function increment() {
        return count++; // Return the current count and then increment it
    }

    function resetCounter() {
        let currentCount = count; // Store the current count
        count = 0; // Reset the count
        return { count: currentCount, message: "Counter reset" }; // Return the count before reset and a reset message
    }

    return {
        increment: increment,
        reset: resetCounter
    };
}
const counter1 = createCounter();

        console.log(counter1.increment()); // 0
        console.log(counter1.increment()); // 1
        console.log(counter1.increment()); // 2

        const resetResult = counter1 .reset(); 
        console.log(resetResult); //  { count: 3, message: 'Counter reset' }

        console.log(counter1.increment()); // 0
        console.log(counter1.increment()); // 1
