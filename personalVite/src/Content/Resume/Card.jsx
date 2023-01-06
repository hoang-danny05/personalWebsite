import "./Resume.css"
import Content from "../Content";

const assetpath = "/src/assets/Resume/";
//remember: source is always relative to index.html

// Icon names: Programming, Cybersecurity, DECA, NHS
const icons = new Map(); //how to assign <String, JSX> 
icons.set("Programming", <ion-icon name="code"></ion-icon>)
icons.set("Cybersecurity", <ion-icon name="terminal-outline"></ion-icon>)
icons.set("DECA", <ion-icon name="medal"></ion-icon>) //just a medal icon
icons.set("NHS", <ion-icon name="school-outline"></ion-icon>) //graduation hat icon

const Card = (props) => {
    //props will have a .className and a .name attr + content for text
    //TODO: get assets for each className of card. DECA, Programming, Cybersecurity, and NHS
    // console.log("Loading card")
    // console.table(props)

    const srcURL = assetpath + props.name + ".png";
    const altTag = `Logo for ${props.name}`;
    const logoColor = "blue"

    let content; 
    console.log(props.className)
    switch (props.className) {
        case "logoImage" : {
            content = (
            <>
                <img src={srcURL} alt={altTag}></img>
                <h2 className="cardtitle">{props.name}</h2>
            </>
            )
            break;
        }
        case "logoIcon" : {
            console.log(`${props.name} logo is loading its icon.`)
            content = ( 
                <>
                    {icons.get(props.name)}
                    <h2 className="cardtitle">{props.name}</h2>
                </>
            )
            break;
        }
        case "title" : {
            content = (
                <h1 className="title">{props.name}</h1>
            )
            break;
        }
        case "text" : {
            content = (
                <p className="textContent">
                        {props.content}
                </p>
            )
            break;
        }
        default: { 
            console.log(props.className === "logoImage")
            content = (
                <p>error </p>
            )
            break;
        }
    }
    console.log("the content is: " + content)
    
    return (
        <div className={"resume-card " + props.className}>
            {content??<h1>Error loading... </h1>}
        </div>
    )
}

export default Card