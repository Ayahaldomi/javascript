console.log('Hello World');
// Zakah
let x = 200;
console.log(x * 0.025);

// Task 1 
let task11 = [ 1, 7 , 9 , 45] ;
// add missing , 
console.log(task11);

let task12 = ["Str" , "alex" , "moh" ];
// add missing , and ]
console.log(task12);

let task13 = [ 'the','fox' , 'over' , 'lazy' , 'dog' ];
// add missing , and ]
console.log(task13);


// Task 2
// What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));

 // Task 3 
// Create an array represents your:
// 1- Favorite Food (2)
// 2- Favorite Sport (3)
// 3- Favorite Movie (2)
let favoriteFood = ["bread" , "milk"];
let favoriteSport = ["Soccer" , "Tennis" , "Volleyball"];
let favoritemovie = ["sing" , "toy story 1" , "toy story 2"];

document.getElementById("demo").innerHTML = favoriteFood + "<br>" + favoriteSport + "<br>" + favoritemovie ;


// Task 4 
// Create a Variable to return the first element in an array 
// Ex: firstOfArray([1,4,5]) => 1
// Ex: firstOfArray(["t","u","g","x"]) => "t"
let firstOfArray = [1,4,5];
let firstOfArray1 = ["t","u","g","x"];
console.log(firstOfArray[0]);
console.log(firstOfArray1[0]);

// Task 5 
// Create a Variable to return the lastOfArray element in an array 

// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"
let lastOfArray = [1,4,5]
let lastOfArray1 = ["t","u","g","x"]
console.log(lastOfArray[lastOfArray.length-1]);
console.log(lastOfArray1[lastOfArray1.length-1]);

// // Task 6 
// Using console make this array to be like this one (push, unshift, shift, pop)

// var array = [0,5,7,9]
// => [1,3,4,6,8,9,10]
var array = [0,5,7,9];
array.push(10);
array.shift();
array.shift();
array.shift();
array.unshift(1 , 3 , 4 , 6 ,8);
console.log(array);

// Task 7
// Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

// var array2 = [5,9,-7,3.5] dddd

var array2 = [];
array2.unshift(5,9,-7,3.5);
console.log(array2);

// // Task 8
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr1.sort(function(a, b){return a-b});
document.getElementById("demo2").innerHTML = arr1;