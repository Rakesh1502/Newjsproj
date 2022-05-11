let num1 = 8
let num2 = 2

document.getElementById("num-1").textContent = num1
document.getElementById("num-2").textContent = num2

let total= document.getElementById("total-1")


function add(){
    let res = num1 + num2
    total.textContent= "Total : " + res
}

function subtract(){
    let res = num1 - num2
    total.textContent= "Total : " + res
}

function multiply(){
    let res = num1 * num2
    total.textContent= "Total : " + res
}

function divide(){
    let res = num1 / num2
    total.textContent= "Total : " + res
}