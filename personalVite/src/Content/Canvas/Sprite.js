const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 120;
const gravity = 1;
const WINDOW_HEIGHT = 300;
const WINDOW_WIDTH = 400;

class Sprite {
    static constants = {
        "window-height" : WINDOW_HEIGHT,
        "window-width" : WINDOW_WIDTH,
        "player-height" : PLAYER_HEIGHT,
        "player-width" : PLAYER_WIDTH,
    }

    constructor(position) {
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

export default Sprite