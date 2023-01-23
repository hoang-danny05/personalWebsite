import "./Canvas.css"
import React from "react";

class Canvas extends React.Component {

    constructor(props) {
        super(props)
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current
        const context = canvas.getContext('2d')

        // console.clear();
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
            console.log("why is this happening twice?")
        })
    }

    render() {
        // const canvasRef = this.canvasRef;

        //can't be useEffect, it must be componentDidMount
        // useEffect(() => {
        // }, [])


        return (
            <div className="canvas-container">
                <p>This is where the canvas would be </p>
                <noscript>Javascript must be enabled for this game to play.</noscript>
                <canvas id="game" ref={this.canvasRef} height="300" width="400"></canvas>
            </div>
        )

    }
}


export default Canvas;