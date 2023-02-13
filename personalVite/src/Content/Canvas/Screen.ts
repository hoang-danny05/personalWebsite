import Canvas from "./Canvas";
import Sprite from "./Sprite";


//this is the screen class, which stores the information for each Screen.


class Screen {
    private static ParentClass : Canvas

    public events : {
        onclick?: Function,
        onmouseup?: Function,
        onmousemove?: Function,
        onkeydown?: Function,
        onkeyup?: Function,
    }

    public sprites : Array<Sprite>;

    public setup : Function;

    constructor(events: Object, sprites: Array<Sprite>, onsetup: Function) {
        this.events = events;
        this.sprites = sprites;
        this.setup = onsetup;
    }
}

export default Screen;