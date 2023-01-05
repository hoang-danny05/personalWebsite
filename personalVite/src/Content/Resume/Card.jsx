import "Resume.css"
import Content from "../Content";

const assetpath = "../../assets/Resume/";

const Card = (props) => {
    //props will have a .type and a .name attr + content for text
    //TODO: get assets for each type of card. DECA, Programming, Cybersecurity, and NHS
    if (props.type === "Logo") {
        const Content = (
        <>
            <img src='{assetpath + props.name}' alt="Logo for {props.name}"></img>
            <h2 className="cardtitle">a</h2>
        </>
        )
    } else if (props.type = "title") {
        const Content = (
            <h1 className="title">{props.name}</h1>
        )
    } else if (props.type = "text") {
        const Content = (
            <p className="cardContent">{props.content}</p>
        )
    }
    
    return (
        <div className="card">
            {Content ?? <h1>Error loading... </h1>}
        </div>
    )
}

export default Card