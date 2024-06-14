
let countEl = document.getElementById("count-el")

console.log(countEl)

let passengerCount = 0;

function incrementCount() {
    passengerCount = passengerCount + 1
    countEl.innerText = passengerCount;
    console.log(passengerCount)
}
