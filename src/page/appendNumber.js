import randomColor from "../util/randomColor"
const divContainer = document.getElementById("container")
const divCenter = document.getElementById("center")
export default function (n, isPrime) {
    const span = document.createElement("span")
    span.innerText = n
    divCenter.innerText = n
    if (isPrime) {
        const color = randomColor()
        span.style.color = color
        createCenterPrimeNumber(n,color)
    }
    divContainer.appendChild(span)
   
}
function createCenterPrimeNumber(n,color){
    const div = document.createElement("div")
    div.className="center"
    div.style.color =color
    div.innerText = n
    document.body.appendChild(div)
    getComputedStyle(div).left
    div.style.transform= "translate(100px,100px)"
    div.style.opacity = 0
}