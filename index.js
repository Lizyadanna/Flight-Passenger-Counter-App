
let countEl = document.getElementById("count-el")

console.log(countEl)

let passengerCount = 0;

function incrementCount() {
    passengerCount += 1
    countEl.innerText = passengerCount;
    console.log(passengerCount)
}

let saveEl = document.getElementById("save-el")

console.log(saveEl)

function save() {
    let saveCount = passengerCount + ' -  '
    saveEl.innerText += saveCount
    console.log(saveCount);
}


