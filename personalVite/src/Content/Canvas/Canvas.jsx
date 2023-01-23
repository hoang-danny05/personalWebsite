import "./Canvas.css"
import { useRef, useEffect } from 'react';

const Canvas = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        console.clear();
        const dimensions = 
            {
                "width" : `${context.canvas.width}`,
                "height" : `${context.canvas.height}`,
            }
        
        console.table( dimensions )

        context.fillStyle = "#000"
        context.fillRect(0,0, context.canvas.width, context.canvas.height)
        context.fillStyle = "#fff"
        context.fillRect(0,0, 10, 10)

        canvas.addEventListener("click", () => {
            console.log("oh my god")
        })
    }, [])


    return (
        <div className="canvas-container">
            <p>This is where the canvas would be </p>
            <noscript>Javascript must be enabled for this game to play.</noscript>
            <canvas id="game" ref={canvasRef} height="300" width="400"></canvas>
        </div>
    )
}


export default Canvas;