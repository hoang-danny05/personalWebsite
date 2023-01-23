const PLAYER_WIDTH = 50
const PLAYER_HEIGHT = 120

class Sprite {
    constructor(position) {
        this.position = position
    }

    draw(context) {
        context.fillRect(this.position.x, this.position.y, PLAYER_WIDTH, PLAYER_HEIGHT)
    }
}

export default Sprite