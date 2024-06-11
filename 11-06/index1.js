console.log("hi")
var submit = document.getElementById('submit').value


function submitall() {
    var name = document.getElementById('name').value
    var gender = document.getElementById('gender').value
    var birth = document.getElementById('birth').value
    var img = document.getElementById('img').value
    var age = document.getElementById('age').value
    const allinfo = {
        "name": name,
        "age": age,
        "gender": gender,
        "birth": birth,
        "img": img,
    }
    const allin = JSON.stringify(allinfo)
    localStorage.setItem("info",allin)
    console.log(localStorage.getItem("info"))


    var des = document.getElementById('des').value
    var major = document.getElementById('major').value
    var html = document.getElementById('html').checked
    var css = document.getElementById('css').checked
    var js = document.getElementById('js').checked
    const alledu = {
        "Description": des,
        "major": major,
        "html": html,
        "css": css,
        "js": js,
    }
    const alled = JSON.stringify(alledu)
    localStorage.setItem("education",alled)


    var sibnum = document.getElementById('sibnum').value
    var sibdes = document.getElementById('sibdes').value
    const allsibl = {
        "sibNum": sibnum,
        "sibDes": sibdes,
    }
    const allsib = JSON.stringify(allsibl)
    localStorage.setItem("SibINfo",allsib)

}