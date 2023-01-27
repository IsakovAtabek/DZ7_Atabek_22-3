const firstNumb = document.querySelector('.firstNumb')
const secondNumb = document.querySelector('.secondNumb')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const mult = document.querySelector('.mult')
const divide = document.querySelector('.divide')
const result = document.querySelector('.result')

function plusFunc () {
    result.innerHTML = +firstNumb.value + +secondNumb.value   
}

function minusFunc () {
    result.innerHTML = +firstNumb.value - +secondNumb.value   
}

function multFunc () {
    result.innerHTML = +firstNumb.value * +secondNumb.value   
}

function divideFunc () {
    result.innerHTML = +firstNumb.value / +secondNumb.value   
}

plus.addEventListener('click', plusFunc)
minus.addEventListener('click', minusFunc)
mult.addEventListener('click', multFunc)
divide.addEventListener('click', divideFunc)