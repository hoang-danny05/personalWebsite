class ButtonSprite {
    private width : number;
    private height : number;
    private x : number;
    private y : number;

    private state : {hover: boolean, click: boolean}

    private onClick : Function;
    private idleColor : string;
    private hoverColor : string;
    private clickColor : string;

    constructor(
        dimensions : 
            {width: number, height: number, x: number, y: number}, 
        properties : 
            {onClick: Function, idleColor? : string, hoverColor? : string, clickColor?: string}) {
        this.width = dimensions.width;
        this.height = dimensions.height;
        this.x = dimensions.x
        this.y = dimensions.x

        this.state = {hover: false, click: false}

        this.onClick = properties.onClick; //just use the .? operator
        this.idleColor = properties.idleColor ?? "#00f";
        this.hoverColor = properties.hoverColor ?? "#f00";
        this.clickColor = properties.clickColor ?? "#0f0";
    }

    draw(context: CanvasRenderingContext2D) {
        if (this.state.click) {
            context.fillStyle = this.clickColor;
        } else if (this.state.hover) {
            context.fillStyle = this.hoverColor;
        } else {
            context.fillStyle = this.idleColor;
        }
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    updateHover(context: CanvasRenderingContext2D, mousePos: {x: number, y: number}) : void{
        //check if the mouse is colliding with the button
        // console.log({
        //     one: (mousePos.x >= this.x), 
        //     two: (mousePos.x <= this.x + this.width), 
        //     three: (mousePos.y >= this.y), 
        //     four: (mousePos.y <= this.y + this.height)
        // })
        // console.log({
        //     calculated: mousePos.y,
        //     context: this.y
        // })
        if (
            (mousePos.x >= this.x) &&
            (mousePos.x <= this.x + this.width) &&
            (mousePos.y >= this.y) &&
            (mousePos.y <= this.y + this.height)
        )
        {
            this.state.hover = true;
        } else {
            this.state.hover = false;
            this.state.click = false;
        }
        this.draw(context)
    }

    updateClick(context: CanvasRenderingContext2D, mousePos: {x: number, y: number}) : void {
        //check if the mouse is colliding with the button
        if (
            (mousePos.x >= this.x) &&
            (mousePos.x <= this.x + this.width) &&
            (mousePos.y >= this.y) &&
            (mousePos.y <= this.y + this.height)
        )
        {
            this.state.click = true;
            this.onClick()
        } else {
            this.state.click = false;
        }
        this.draw(context)
    }
}

export default ButtonSprite