const button = document.getElementById('randomizer');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const deg = document.getElementById('deg')
const css = document.querySelector('article');
const body = document.getElementById('body');

let r1,r2,g1,g2,b1,b2;

let degree = '45'

function randomizer() {
    return Math.floor(Math.random() * 255)
}

function randomColor(color) {
    if(color == 1){
        r1=randomizer()
        g1=randomizer()
        b1=randomizer()
    return 'rgb(' + r1 + ', ' + g1 + ', ' + b1 + ')'
    }
    else{
        r2=randomizer()
        g2=randomizer()
        b2=randomizer()
    return 'rgb(' + r2 + ', ' + g2 + ', ' + b2 + ')' 
    }

}

function randomDeg() {
    let a;
    if(Math.round(Math.random())){
        a = 1
    }
    else{
        a = -1
    }
   degree = (Math.floor(Math.random() * 180) * a) + 'deg'
    return degree
}

function setGradient(firstColor, secondColor, deg) {
    body.style.background = 'linear-gradient('+deg + ', ' + firstColor + ',' + secondColor + ')'
    css.textContent = body.style.background + ';'
    color1.value = '#' + toHex(r1)+toHex(g1)+toHex(b1)
    color2.value = '#' + toHex(r2)+toHex(g2)+toHex(b2)
    console.log(deg + ', ' + firstColor + ',' + secondColor)
}

function setRandomGradient() {
    setGradient(randomColor(1),randomColor(2),randomDeg())
}

function setGradientOnInput() {
    setGradient(color1.value,color2.value,deg.value+'deg')
}



color1.addEventListener('input', setGradientOnInput)
color2.addEventListener('input', setGradientOnInput)
deg.addEventListener('input', setGradientOnInput)

function toHex(x) {
    let hex = x.toString(16)
    if(hex.length == 1){
        hex = '0'+hex
    }
    return hex
}

setRandomGradient()