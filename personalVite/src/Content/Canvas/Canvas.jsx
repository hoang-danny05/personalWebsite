import "./Canvas.css"
import React from "react";
import Sprite from "./Sprite.js";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from "./Sprite.js";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "./Sprite.js";


class Canvas extends React.Component {

    constructor(props) {
        super(props)
        this.canvasRef = React.createRef();
        this.state = {
            gameStarted : false,
        }
        this.keys = {
            'w' : false,
            'a' : false,
            's' : false,
            'd' : false,
        }
    }

    componentDidMount() {
        const canvas = this.canvasRef.current
        const context = canvas.getContext('2d');
        this.context = context;

        this.state.gameStarted = false;

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

        const player = new Sprite({x: 30, y: 50 })
        const enemy = new Sprite({x: 200, y:50})
        this.sprites = [player, enemy]

        canvas.addEventListener("click", () => {
            //reset the background
            // context.fillStyle = "#000"
            // context.fillRect(0,0, context.canvas.width, context.canvas.height)
            //update the players
            // context.fillStyle = "#00f"
            // player.draw(context)
            // player.update()
            // enemy.draw(context)
            // enemy.update()
            console.log("Clicked")
            console.table(player);
        })

        window.onkeydown = (event) => {
            // console.log(event.key)
            this.keys[event.key] = true;

            switch (event.key) {
                case " ":
                case "w": {
                    console.table(
                        { 
                            player : player.position.y + PLAYER_HEIGHT,
                            ground : WINDOW_HEIGHT,
                        });
                    if(player.position.y + PLAYER_HEIGHT === WINDOW_HEIGHT)  {
                        player.velocity.y = -1 * 15;
                        console.log("jump")
                    }
                break;
                }
                }
        }

        window.onkeyup = (event) => {
            // console.log(event.key)
            this.keys[event.key] = false;
        }

        const playButton = document.getElementById("game-button");

        playButton.addEventListener("click", () => {
            console.log(playButton.name)
            // this.setState({gameStarted: true});
            this.animate()
            console.log(this.state)
        })

        // console.log(this)
    }

    animate = () => {
        // console.log(this.context)
        //draw background
        this.context.fillStyle = "#000"
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        //draw all sprites
        this.context.fillStyle = "#f00"
        for (const sprite of this.sprites) {
            sprite.draw(this.context);
            sprite.update();
        }
        //sprite control
        if (this.keys.a & this.keys.d) {
            this.sprites[0].velocity.x = 0;
        } else if (this.keys.a) {
            this.sprites[0].velocity.x = -5;
        } else if (this.keys.d) {
            this.sprites[0].velocity.x = 5;
        } else {
            this.sprites[0].velocity.x = 0;
        }
        window.requestAnimationFrame(this.animate)
    }

    render() {
        // const canvasRef = this.canvasRef;

        //can't be useEffect, it must be componentDidMount
        // useEffect(() => {
        // }, [])

        const play = <ion-icon name="play" id="game-button" className="button"/>;
        const pause = <ion-icon name="pause" id="game-button" className="button"/>;

        console.log(this.state)

        return (
            <div className="game-container">
                <div className="game-bar">
                    <div className="bar-item"><ion-icon name="expand" className="button"/></div>
                    <div className="bar-item">Cool Game I Made</div>
                    <div className="bar-item">{this.state.gameStarted ? pause : play}</div>
                </div>
                <noscript>Javascript must be enabled for this game to play.</noscript>
                <canvas id="game" ref={this.canvasRef} height="300" width="400"></canvas>
            </div>
        )

    }
}


export default Canvas;