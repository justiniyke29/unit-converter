let convertBtn = document.getElementById("convert-btn")
let  lengthEl = document.getElementById("length-el")
let massEl = document.getElementById("mass-el")
let volume = document.getElementById("volume-el") 
let inputEl = document.getElementById("input-el")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet` 
    massEl.textContent = `${baseValue} kilogram = ${baseValue * kiloToPound} pound`
    volume.textContent = `${baseValue} litre = ${baseValue * literToGallon} gallon`
})
