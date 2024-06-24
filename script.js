const countingDiv = document.querySelector('#counting-div')
const counterInput = document.getElementById('counter-input')

let counter = 0

function addBtn() {
           
    plus = Number(counterInput.value);
    console.log(plus);
    counter = counter+plus
    countingDiv.innerText = counter;

}

function lessBtn() {
    plus = parseInt(counterInput.value);
    counter = counter-plus
    countingDiv.innerText = counter;
}

function resetBtn() {
    counter = 0
    countingDiv.innerText = counter
}
