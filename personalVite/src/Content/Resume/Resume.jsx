import "./Resume.css"
import Card from "./Card.jsx"
import { useState } from "react"

// const arrayNames = 

const Resume = () => {
    const [status, setStatus] = useState(
        { 
            names: [
                {
                    name : "Programming",
                    description: "test1",
                }, 
                {
                    name : "Cybersecurity", 
                    description: "test1",
                }, 
                {
                    name : "DECA", 
                    description: "test1",
                }, 
                {
                    name: "NHS", 
                    description: "test1",
                }
                ],
            formtype: "iconlist", // may either be iconlist or description
        }
    )

    return (
        //Warning: each child in list should have a "key" prop. 
        <div className="resume-body">
            {status.names.map(item => 
                (<Card 
                    className={item.name === "DECA" ? "logoImage" : "logoIcon"} 
                    name = {item.name} 
                    key = {item.name}
                    setter = {setStatus}
                />)
            )}
            {/* <Card className = "logoIcon" name = "Programming" ></Card>
            <Card className = "logoIcon" name = "Cybersecurity"></Card>
            <Card className = "logoImage" name = "DECA"></Card>
            <Card className = "logoIcon" name = "NHS"></Card> */}
        </div>
    )
}


export default Resume;