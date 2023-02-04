import "./Canvas.css"
import React from "react";
import Sprite from "./Sprite.js";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from "./Sprite.js";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "./Sprite.js";
import CanvasHelper from "./CanvasHelper.ts"
import ButtonSprite from "./ButtonSprite.ts"


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
        this.isclicked = false;
        this.clickLocation = {x:0,y:0};
        this.sprites = [];
    }

    componentDidMount() {
        const canvas = this.canvasRef.current
        const context = canvas.getContext('2d');
        this.context = context;

        this.helper = new CanvasHelper({canvas: canvas})

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
        this.player = player;
        this.button = new ButtonSprite(
            {x: 30, y: 30, width: 100, height: 50},
            {onClick: () => {
                console.log("click!!!!");
            }
            }
        )

        // canvas.addEventListener("click", () => {
            //reset the background
            // context.fillStyle = "#000"
            // context.fillRect(0,0, context.canvas.width, context.canvas.height)
            //update the players
            // context.fillStyle = "#00f"
            // player.draw(context)
            // player.update()
            // enemy.draw(context)
            // enemy.update()
            // console.log("Clicked")
            // console.table(player);
        // })

        window.onkeydown = (event) => {
            // console.log(event.key)
            this.keys[event.key] = true;

            switch (event.key) {
                case " ":
                case "w": {
                    // console.table(
                    //     { 
                    //         player : player.position.y + PLAYER_HEIGHT,
                    //         ground : WINDOW_HEIGHT,
                    //     });
                    if(player.position.y + PLAYER_HEIGHT === WINDOW_HEIGHT)  {
                        player.velocity.y = -1 * 15;
                        // console.log("jump")
                    }
                break;
                }
                }
        }

        window.onkeyup = (event) => {
            // console.log(event.key)
            this.keys[event.key] = false;
        }

        window.onmousemove = (event) => {
            // console.log(event);
            this.mouseLocation = this.helper.getRelativeMousePosition(event)
            this.button.updateHover(context, this.helper.getRelativeMousePosition(event))
            // console.log(this.helper.getRelativeMousePosition(event))
        }

        window.onclick = (event) => {
            // console.log(this.helper.getRelativeMousePosition(event))
            // console.log(event)
            this.button.updateClick(context, this.helper.getRelativeMousePosition(event))
            this.isclicked = true;
        }

        window.onMouseUp = (event) => {
            this.isclicked = false;
        }

        const playButton = document.getElementById("game-button");

        playButton.onclick = () => {
            this.animate();
        }

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
        //player control
        const player = this.player;
        if (this.keys.a & this.keys.d) {
            player.velocity.x = 0;
        } else if (this.keys.a) {
            player.velocity.x = -5;
        } else if (this.keys.d) {
            player.velocity.x = 5;
        } else {
            player.velocity.x = 0;
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
                <canvas 
                id="game" 
                ref={this.canvasRef} 
                height={WINDOW_HEIGHT} 
                width={WINDOW_WIDTH} 
                style={{height: WINDOW_HEIGHT}}
                />
            </div>
        )

    }
}


export default Canvas;