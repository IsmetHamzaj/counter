var increase = document.getElementById('increase')
var decrease = document.getElementById('decrease')
var reset = document.getElementById('reset')
var text = document.getElementById('text')
var counterVal = 0;
increase.addEventListener('click', function() {
    counterVal++
    text.innerHTML = counterVal
    console.log(counterVal)
    if(counterVal > 0) {
        text.style.color = "green";
    }
})
decrease.addEventListener('click', function() {
    counterVal--
    text.innerHTML = counterVal;
    if(counterVal < 0) {
        text.style.color = "red"
    }
})
reset.addEventListener('click', function() {
    counterVal = 0;
    text.innerHTML = counterVal
    if(counterVal == 0) {
        text.style.color = "grey"
    }
    console.log(counterVal)
})