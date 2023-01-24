const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 120;
const gravity = 1;
const WINDOW_HEIGHT = 300;
const WINDOW_WIDTH = 400;

class Sprite {
    constructor(position) {
        this.position = position
        this.velocity = {x: 0, y: 0}
    }

    draw(context) {
        context.fillRect(this.position.x, this.position.y, PLAYER_WIDTH, PLAYER_HEIGHT)
    }

    update() {
        this.velocity.y += gravity;
        
        if(this.position.y + PLAYER_HEIGHT === WINDOW_HEIGHT) {
            this.velocity.y = 0;
        }
        else if (this.position.y + this.velocity.y + PLAYER_HEIGHT>= WINDOW_HEIGHT) {
            this.velocity.y = 0;
            this.position.y = WINDOW_HEIGHT - PLAYER_HEIGHT;
        }
        else {
            this.position.y += this.velocity.y
        }
        this.position.x += this.velocity.x
    }
}

export default Sprite