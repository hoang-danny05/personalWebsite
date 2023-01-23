import "./Canvas.css"
import React from "react";
import Sprite from "./Sprite.js";

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
            context.fillStyle = "#00f"
            const player = new Sprite({x: 30, y: 50})
            const enemy = new Sprite({x: 200, y:50})
            player.draw(context)
            enemy.draw(context)
        })
    }

    render() {
        // const canvasRef = this.canvasRef;

        //can't be useEffect, it must be componentDidMount
        // useEffect(() => {
        // }, [])


        return (
            <div className="game-container">
                <div className="game-bar">
                    <div className="bar-item"><ion-icon name="expand-outline" /></div>
                    <div className="bar-item">Cool Game I Made</div>
                    <div className="bar-item">-Danny</div>
                </div>
                <noscript>Javascript must be enabled for this game to play.</noscript>
                <canvas id="game" ref={this.canvasRef} height="300" width="400"></canvas>
            </div>
        )

    }
}


export default Canvas;