import "../assets/react.svg";
import { useState } from 'react';

let textIndex = 0;
const textResult = "Danny Hoang, _ Software Programmer";
const typingDelay = 50;

function Header() {
    const [innerHeader, setInnerHeader] = useState("Danny <br /> Hoang")

    function doTypingEffect() {
        if (textIndex > textResult.length) {
            textIndex = 0;
            return
        }
        //actually do the thing now
        const newHeader = textResult.substring(0, textIndex);
        setInnerHeader(newHeader.replace("_", "<br />"))
        textIndex++;
        setTimeout(doTypingEffect, typingDelay)
    }
    
    return(
        <div className='Header'>
            <h1 className="name" onClick={doTypingEffect} dangerouslySetInnerHTML={{__html: innerHeader}}>
            </h1>
            <img src="./src/assets/react.svg" alt="React Framework Logo"></img>
        </div>
    )
}


export default Header
