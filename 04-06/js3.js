// 1. Write a JS code to print numbers from 1 to 10
let num = ""
let i = 1
for (; i<= 10; i++) {
    num += i + "<br>";
    console.log(i)
    document.getElementById("demo").innerHTML = num
}


/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]

*/
    var arr = [13,23,12,45,22,48,66,100]
    let even =[]
    for (i = 0;i < arr.length;i++){
        if (arr[i] % 2 == 0){
            even.unshift(arr[i])
        }
    }
    console.log(even)
/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 


*/
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
    let even1 =[]
    for (i = 0;i < arr.length;i++){
        
            even1.push(arr1[i])
        console.log(even1.join(' '))
        document.write(even1.join(' ') + '<br>')
    }
    
 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
let x = "don’t know why"
if (x.includes('y')){
    console.log("yes")
}
else {
    console.log("no")
}