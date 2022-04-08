// Author : daniellukonis

class Sweep{
    constructor(){
        this.canvas = document.querySelector("canvas")
        this.context = this.canvas.getContext("2d")

        this.centerX = Math.floor(this.canvas.width/2)
        this.centerY = this.centerX

        this.sweepRadius = Math.floor(this.canvas.width / 10)
        this.maxRadius = this.getMaxRadius()

        this.minRadius = Math.floor(this.canvas.width / 20)
        this.radiusSplit = this.getRadiusSplit()

        this.innerRadius = this.maxRadius - this.radiusSplit
        this.outerRadius = this.maxRadius - this.innerRadius
        this.innerRadiusAngle = 0
        this.outerRadiusAngle = 0
        this.innerRadiusVelocity = fxrand()
        this.outerRadiusVelocity = fxrand()

        // this.sweepColor = this.getRandomGrayscale()
        this.sweepColor = this.getRandomColor()
        this.strokeColor = "rgba(0,0,0,0.1)"

        this.sweepLength = Math.floor(this.outerRadius / 2)
        this.testRadius()
    }

    testRadius(){
        return console.log("radius split test" , this.maxRadius === this.innerRadius + this.outerRadius)
    }

    getRandomColor(){
        const r = Math.floor(255*fxrand())
        const g = Math.floor(255*fxrand())
        const b = Math.floor(255*fxrand())
        return `rgba(${r},${g},${b},0.1)`
    }

    getRandomGrayscale(){
        const fx = Math.floor(100*fxrand()) + 155
        return `rgba(${fx},${fx},${fx},0.1)`
    }

    getMaxRadius(){
        return this.centerX - this.sweepRadius
    }

    getRadiusSplit(){
        return Math.floor((this.maxRadius - this.minRadius) * fxrand()) + this.minRadius
    }

    drawSweep({context} = this){
        context.save()
        context.fillStyle = this.sweepColor
        context.translate(this.centerX,this.centerY)
        context.rotate(this.innerRadiusAngle)
        context.translate(this.innerRadius,0)
        context.rotate(this.outerRadiusAngle)
        context.beginPath()
        context.arc(this.outerRadius,0,this.sweepRadius,0,Math.PI*2 * fxrand())
        context.fill()
        context.restore()
    }

    incrementSweep(){
        this.innerRadiusAngle += this.innerRadiusVelocity
        this.outerRadiusAngle += this.outerRadiusVelocity
    }

    animateSweep(){
        this.drawSweep()
        this.incrementSweep()
    }
}