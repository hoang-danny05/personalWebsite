const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 120;
const gravity = 1;
const WINDOW_HEIGHT = 500;
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

class buttonSprite {
    constructor(dimensions, options) {
        this.width = dimensions.width;
        this.height = dimensions.height;
        this.x = dimensions.x
        this.y = dimensions.x

        this.onClick = options.onClick; //just use the .? operator
        this.idleColor = options.idleColor ?? "#00f";
        this.hoverColor = options.hoverColor ?? "#f00";
    }
}

export default Sprite
export { PLAYER_WIDTH, PLAYER_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT }