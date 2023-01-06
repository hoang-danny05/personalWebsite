import "./Resume.css"
import Card from "./Card.jsx"

const Resume = () => {
    return (
        <div className="resume-body">
            <Card className = "logoIcon" name = "Programming"></Card>
            <Card className = "logoIcon" name = "Cybersecurity"></Card>
            <Card className = "logoImage" name = "DECA"></Card>
            <Card className = "logoIcon" name = "NHS"></Card>
        </div>
    )
}

export default Resume;