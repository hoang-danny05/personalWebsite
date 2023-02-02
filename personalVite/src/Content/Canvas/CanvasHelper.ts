

class CanvasHelper {
    private canvas 
    private context

    constructor(properties) {
        this.canvas = properties.canvas;
        this.context = properties.canvas.getContext('2d')
    }

    getRelativeMousePosition(event: MouseEvent) {
        const canvasPos = this.canvas.getBoundingClientRect()
        const mousePos = {x:event.screenX, y: event.screenY}
        //relative X and Y
        //relativeX = event.screenX - canvas.getBoundingClientRect().x
        const result = {
            x: mousePos.x - canvasPos.x,
            y: mousePos.y - canvasPos.y,
        }
        return result
    }
}

export default CanvasHelper;