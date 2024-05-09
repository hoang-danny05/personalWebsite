import { WINDOW_WIDTH, WINDOW_HEIGHT } from "./Sprite";

class CanvasHelper {
    private canvas : HTMLCanvasElement 
    private context : CanvasRenderingContext2D

    constructor(properties) {
        this.canvas = properties.canvas;
        this.context = properties.canvas.getContext('2d')
    }

    getRelativeMousePosition(event: MouseEvent) {
        const canvasPos = this.canvas.getBoundingClientRect()
        const mousePos = {x:event.x, y: event.y}
        // console.log("BEGIN TABLE")
        // console.log(mousePos)
        // console.log(canvasPos)
        // console.log("END TABLE")
        //relative X and Y
        //relativeX = event.screenX - canvas.getBoundingClientRect().x
        //don't use canvasPos.x, canvasPos.y, it gives the wrong coordinates.
        const result = {
            x: (mousePos.x - canvasPos.left),
            y: (mousePos.y - canvasPos.top),
        }
        return result
    }
}

export default CanvasHelper;