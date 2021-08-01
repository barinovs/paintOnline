import Tool from "./Tool";


export default class Eraser extends Tool {
    constructor(canvas) {
        super(canvas)
        this.listen()
    }

    listen() {
        this.mouseDownHandler = this.mouseDownHandler.bind(this)
        this.mouseUpHandler = this.mouseUpHandler.bind(this)
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
    }

    mouseUpHandler(e) {
        this.mouseDown = false
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX, e.pageY)
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {

        }
    }


}