let blur = document.querySelector('.blur')
let sepia = document.querySelector('.sepia')
let invert = document.querySelector('.invert')
let img = document.querySelector('.img-container img')
let valueInput = document.querySelector('.img-value input')

let activeBtn

blur.addEventListener('click', () =>{
    blurEffect ()
})

sepia.addEventListener('click', () =>{
    sepiaEffect ()
})

invert.addEventListener('click', () =>{
        invertEffect ()
})

valueInput.addEventListener('input', () => {
    if(activeBtn === 'blur') blurEffect()
    if(activeBtn === 'invert') invertEffect()
    if(activeBtn === 'sepia') sepiaEffect()
})

function blurEffect(){
    img.style.filter = `blur(${valueInput.value}px)`
    activeBtn = 'blur'
}

function sepiaEffect(){
    img.style.filter = `sepia(${valueInput.value}%)`
    activeBtn = 'sepia'
}
function invertEffect(){
    img.style.filter = `invert(${valueInput.value}%)`
    activeBtn = 'invert'
}

var inputRange = document.getElementsByClassName('range')[0],
    maxValue = 100,
    speed = 5,
    currValue, rafID;


inputRange.min = 0;
inputRange.max = maxValue;


function unlockStartHandler() {

    window.cancelAnimationFrame(rafID);

    currValue = +this.value;
}

function unlockEndHandler() {


    currValue = +this.value;


    if(currValue >= maxValue) {
        successHandler();
    }
    else {
        rafID = window.requestAnimationFrame(animateHandler);
    }
}


function animateHandler() {
    var transX = currValue - maxValue;
    inputRange.value = currValue;


    if (currValue < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (currValue < 40) {
        inputRange.classList.remove('purple');
    }
    if (currValue < 60) {
        inputRange.classList.remove('pink');
    }

    if(currValue > -1) {
        window.requestAnimationFrame(animateHandler);
    }


    currValue = currValue - speed;
}


function successHandler() {
    alert('Unlocked');
};


inputRange.addEventListener('mousedown', unlockStartHandler, false);
inputRange.addEventListener('mousestart', unlockStartHandler, false);
inputRange.addEventListener('mouseup', unlockEndHandler, false);
inputRange.addEventListener('touchend', unlockEndHandler, false);


inputRange.addEventListener('input', function() {

    if (this.value > 20) {
        inputRange.classList.add('ltpurple');
    }
    if (this.value > 40) {
        inputRange.classList.add('purple');
    }
    if (this.value > 60) {
        inputRange.classList.add('pink');
    }


    if (this.value < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (this.value < 40) {
        inputRange.classList.remove('purple');
    }
    if (this.value < 60) {
        inputRange.classList.remove('pink');
    }
});
