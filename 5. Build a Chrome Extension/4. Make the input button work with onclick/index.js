
let inputBtn = document.getElementById("input-btn")
let boxGrabbed = document.getElementById("box")

inputBtn.addEventListener("click", function() {

    console.log("Button clicked! from eventListener")
})

boxGrabbed.addEventListener("click", function() {
    console.log("I want to open the box!")
})