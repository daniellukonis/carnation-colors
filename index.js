// Author : daniellukonis

window.addEventListener("contextmenu",e => e.preventDefault())

function resizeCanvas(){
    const canvas = document.querySelector("canvas")
    window.innerWidth > window.innerHeight ?
        canvas.width = canvas.height = window.innerHeight :
        canvas.width = canvas.height = window.innerWidth ;
}
resizeCanvas()

function fillCanvas(color = "black"){
    const canvas = document.querySelector("canvas")
    const context = canvas.getContext("2d")
    context.save()
    context.fillStyle = color
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.restore()
}

fillCanvas()

function fillArray(classObject , quanitiy = 10){
   return Array(quanitiy).fill(0).map(e=>e = new classObject())
}

const sweeps = fillArray(Sweep)
const maxLoops = 100
let loopCount = 0

function loop(){
    loopCount < maxLoops ?
    requestAnimationFrame(loop) : null
    sweeps.forEach(e => e.animateSweep())
    loopCount++
}
loop()

// window.$fxhashFeatures = {
    // "Crack Count": maxCircuits
// }