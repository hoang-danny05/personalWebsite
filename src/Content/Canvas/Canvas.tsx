import "./Canvas.css"
import React from "react";
import Sprite from "./Sprite";
import { Player } from "./Sprite"
import { PLAYER_WIDTH, PLAYER_HEIGHT } from "./Sprite";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "./Sprite";
import CanvasHelper from "./CanvasHelper"
import ButtonSprite from "./ButtonSprite"
import { IoIosPlay, IoIosPause, IoIosExpand} from "react-icons/io"

type props = {};
type state = {gameStarted: boolean}

class Canvas extends React.Component<props, state> {
    private canvasRef : React.RefObject<HTMLCanvasElement>
    private helper : CanvasHelper
    private sprites: Sprite[];
    private player : Sprite
    private button : ButtonSprite
    private cContext : CanvasRenderingContext2D

    private keys : {[index: string] : boolean}
    private isclicked : boolean;
    private gameStarted : boolean
    private clickLocation : {x: number, y: number}
    // private state;

    constructor(props: any) {
        super(props)
        this.canvasRef = React.createRef<HTMLCanvasElement>();
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
        const canvas : HTMLCanvasElement = this.canvasRef.current!
        const context : CanvasRenderingContext2D = canvas.getContext('2d')!;
        this.cContext = context;

        this.helper = new CanvasHelper({canvas: canvas})

        // console.clear();
        const dimensions = 
            {
                "width" : `${context?.canvas.width}`,
                "height" : `${context?.canvas.height}`,
            }
        
        console.table( dimensions )

        context.fillStyle = "#000"
        context.fillRect(0,0, context.canvas.width, context.canvas.height)
        context.fillStyle = "#fff"
        context.fillRect(0,0, 10, 10)

        const player = new Player({x: 30, y: 50 })
        const enemy = new Player({x: 200, y:50})
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

        window.onclick = (event) => {
            // console.log(this.helper.getRelativeMousePosition(event))
            // console.log(event)
            this.button.updateClick(context, this.helper.getRelativeMousePosition(event))
            this.isclicked = true;
            // console.log("click") ==> detects thumb touch but not drag
        }

        window.onmouseup = (event) => {
            this.isclicked = false;
        }

        window.onmousemove = (event) => {
            // console.log(event);
            // this.mouseLocation = this.helper.getRelativeMousePosition(event)
            this.button.updateHover(context, this.helper.getRelativeMousePosition(event))
            // console.log(this.helper.getRelativeMousePosition(event))
        }

        //MOBILE INTEGRATION
        
        // window.onscroll = (event) => {
        //     console.log("scroll")
        // }

        //PLAYBUTTON INTEGRATION

        const playButton = document.getElementById("game-button");

        playButton!.onclick = () => {
            this.animate();
        }

        // console.log(this)
    }

    animate = () => {
        // console.log(this.context)
        //draw background
        this.cContext.fillStyle = "#000"
        this.cContext.fillRect(0, 0, this.cContext.canvas.width, this.cContext.canvas.height);
        //draw all sprites
        this.cContext.fillStyle = "#f00"
        for (const sprite of this.sprites) {
            sprite.draw(this.cContext);
            sprite.update();
        }
        //player control
        const player = this.player;
        window.requestAnimationFrame(this.animate)
    }

    render() {
        // const canvasRef = this.canvasRef;

        //can't be useEffect, it must be componentDidMount
        // useEffect(() => {
        // }, [])

        const play = <span id="game-button" className="button"><IoIosPlay name="play"/></span>;
        const pause = <span id="game-button" className="button"><IoIosPause name="pause" /></span>;

        console.log(this.state)

        return (
            <div className="game-container">
                <div className="game-bar">
                    <div className="bar-item button"><IoIosExpand name="expand"/></div>
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