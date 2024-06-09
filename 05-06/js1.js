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
        else {
            document.getElementById("change").style.fontStyle = "normal"
        };
        if (document.getElementById("bold").checked) {
            document.getElementById("change").style.fontWeight = "bold";
        }
        else {
            document.getElementById("change").style.fontWeight = "normal";
        };
        if (document.getElementById("underline").checked) {
            document.getElementById("change").style.textDecoration = "underline";
        }
        else {
            document.getElementById("change").style.textDecoration = "none";
        };
        }
    
    var password1 = document.getElementById('password1')
    var password2 = document.getElementById('password2')
    function pass()
    {
        if(password1.value.length < 6)
            {
                document.getElementById('false').style.visibility = 'visible'

            }else{
                document.getElementById('false').style.visibility = 'hidden'
            }
    }
    function pass1()
    {
        if (password1.value != password2.value)
            {
                document.getElementById('false1').style.visibility = 'visible'
            }else{
                document.getElementById('false1').style.visibility = 'hidden'
                document.getElementById('submit').style.visibility = 'visible'
            }
    }

    function blue(){
        document.getElementById('blue').style.backgroundColor = 'red'
    }