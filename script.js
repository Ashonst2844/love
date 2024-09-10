const main = document.getElementById("main")
const button = document.getElementById("open")
const address = document.getElementById("address")
const envelope = document.getElementById("envelope")
const paper = document.getElementById("paper")

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
}