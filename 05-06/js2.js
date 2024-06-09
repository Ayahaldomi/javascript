var play = document.getElementById('play')
var add = document.getElementById('add')
var out = document.getElementById('out')
add.addEventListener('click',
    function() {
        var playvalue = play.value;
        var newpa = document.createElement('p');
        newpa.textContent = playvalue;
        out.appendChild(newpa);


    }
)
