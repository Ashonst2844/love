const main = document.getElementById("main")
const button = document.getElementById("open")
const address = document.getElementById("address")
const envelope = document.getElementById("envelope")
const paper = document.getElementById("paper")
const love1 = document.getElementById("heart")
const love2 = document.getElementById("heart1")

function openEnvelope() {
    address.style.opacity = 0
    setTimeout(() => {
        envelope.style.transform = "translate(0, -1000px)",
        envelope.style.display = "none"
    }, 300);
    setTimeout(() => {
        main.style.height = "500px"
    }, 400);
    setTimeout(() => {
        button.style.top = "500px"
    }, 500)
    setTimeout(() => {
        paper.style.opacity = "100%"
    }, 1000);
    setTimeout(() => {
       button.style.opacity = "0" 
    }, 1100);
    setTimeout(() => {
        love1.style.top = "490px"
    }, 400);
    setTimeout(() => {
       love2.style.top = "510px" 
    }, 400);
}