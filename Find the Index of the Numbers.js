let numbers = [17, 31, 77, 20, 63];

let userInputEl = document.getElementById("userInput");
let findBtnEl = document.getElementById("findBtn");
let indexOfNumberEl = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let value = parseInt(userInputEl.value);
    let indexNumber = numbers.findIndex(function(Item) {
        if (Item === value) {
            return true;
        } else {
            return false;
        }
    });
    indexOfNumberEl.textContent = indexNumber;
}