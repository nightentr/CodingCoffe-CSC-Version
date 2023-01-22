const result = document.getElementById('result')
const x = document.getElementById('x')
const y = document.getElementById('y')

function calc(){
    result.textContent = parseInt(x.value)+parseInt(y.value)
}

x.addEventListener('input', calc)
y.addEventListener('input', calc)

function addClass(){
    document.body.style.backgroundColor = '#333';
}

function addKlass(){
    document.body.style.backgroundColor = '#fff';
}

let body = document.querySelector('body')

let div = document.createElement('div')

body.append(div)

