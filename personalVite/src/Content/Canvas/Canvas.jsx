import { useRef, useEffect } from 'react';

const Canvas = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        context.fillStyle = "#000"
        context.fillRect(0,0, context.canvas.width, context.canvas.height)
        context.fillStyle = "#fff"
        context.fillRect(0,0, 10, 10)
    }, [])


    return (
        <>
            <p>This is where the canvas would be </p>
            <noscript>Javascript must be enabled for this game to play.</noscript>
            <canvas ref={canvasRef}></canvas>
        </>
    )
}


export default Canvas;