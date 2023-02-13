const PLAYER_WIDTH : number = 50;
const PLAYER_HEIGHT : number = 120;
const gravity : number = 1;
const WINDOW_HEIGHT : number = 500;
const WINDOW_WIDTH : number = 400;

class Sprite {
    position : {x: number, y: number}
    velocity : {x: number, y: number}

    constructor(position: {x: number, y: number}) {
        this.position = position
        this.velocity = {x: 0, y: 0}
    }

    draw(context) {
        context.fillRect(this.position.x, this.position.y, PLAYER_WIDTH, PLAYER_HEIGHT)
    }

    update() {
        this.velocity.y += gravity;
        this.position.x += this.velocity.x;
        if(this.velocity.y <= 0) {
            this.position.y += this.velocity.y;
            return;
        }

        
        if(this.position.y + PLAYER_HEIGHT === WINDOW_HEIGHT) {
            this.velocity.y = 0;
        }
        else if (this.position.y + this.velocity.y + PLAYER_HEIGHT >= WINDOW_HEIGHT) {
            this.velocity.y = 0;
            this.position.y = WINDOW_HEIGHT - PLAYER_HEIGHT;
        }
        else {
            this.position.y += this.velocity.y
        }
    }
}

class Player extends Sprite {
    constructor(position: {x: number, y:number}) {
        super(position);
    }

    controlUpdate(keys: {[char: string]: boolean}) {
        if (keys.a && keys.d) {
            this.velocity.x = 0;
        } else if (keys.a) {
            this.velocity.x = -5;
        } else if (keys.d) {
            this.velocity.x = 5;
        } else {
            this.velocity.x = 0;
        }
        this.update()
    }
}

export default Sprite
export { PLAYER_WIDTH, PLAYER_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT, Player }