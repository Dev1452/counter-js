const countingDiv = document.querySelector('#counting-div')
const counterInput = document.getElementById('counter-input')

let counter = 0

function addBtn() {
    counter = counter+1
    counterMultiple = parseInt(counter * counterInput.value)
    countingDiv.innerText = counterMultiple;
}

function lessBtn() {
    counter = counter-1
    counterMultiple = parseInt(counter * counterInput.value)
    countingDiv.innerText = counterMultiple;
}

function resetBtn() {
    counter = 0
    countingDiv.innerText = counter
}