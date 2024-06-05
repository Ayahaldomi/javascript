let hello = document.getElementById("hello")
hello.addEventListener("mouseover",function(){
    hello.innerHTML = "Hello World !"
})
hello.addEventListener("mouseout",function(){
    hello.innerHTML = "Can i help you?"
})
// document.getElementById("image").src = "Palestine.jpg";


let flag =  document.getElementById("myselect")
 function myflag (a){
    var a = document.getElementById("myselect").value;
    if (a == "jordan"){
        document.getElementById("image").src = "Flag-Jordan.webp";
      
    }
    else if (a == "palestine"){
         document.getElementById("image").src = "Palestine.jpg";
    }
    }


    let form = document.getElementById("font")
    function myfoms(b){
        var b = document.getElementById("font").value;
        if (b == "Times New Roman"){
            document.getElementById("change").style.fontFamily = "Times New Roman";
        } else if (b == "Courier New") {
            document.getElementById("change").style.fontFamily = "Courier New";
        } else if (b == "Brush Script MT") {
            document.getElementById("change").style.fontFamily = "Brush Script MT";
        }
        }
    let form1 = document.getElementById("size")
    function myfoms1(c){
        var c = document.getElementById("size").value;
        if (c == "10px"){
            document.getElementById("change").style.fontSize = "10px";
        } else if (c == "20px") {
            document.getElementById("change").style.fontSize = "20px";
        } else if (c == "30px") {
            document.getElementById("change").style.fontSize = "30px";
        }
        }
    let form3 = document.getElementById("deco")
    function myfoms2(){
        if (document.getElementById("italic").checked){
            document.getElementById("change").style.fontStyle = "italic";
        } 
        else if (document.getElementById("bold").checked) {
            document.getElementById("change").style.fontWeight = "bold";
        }
         else if (document.getElementById("underline").checked) {
            document.getElementById("change").style.textDecoration = "underline";
        }
        }