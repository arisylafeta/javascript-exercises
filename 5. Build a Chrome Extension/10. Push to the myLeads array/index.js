let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked
let myArray = []

inputBtn.addEventListener("click", function() {
    const lala = inputEl.value
    myArray.push(lala)
    console.log(myArray)
})


