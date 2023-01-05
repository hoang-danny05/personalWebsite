import "./Resume.css"
import "./Card.jsx"

const Body = () => {
    return (
        <div className="Body">
            <Card type = "logo" name = "Programming"></Card>
            <Card type = "logo" name = "Cybersecurity"></Card>
            <Card type = "logo" name = "DECA"></Card>
            <Card type = "logo" name = "NHS"></Card>
        </div>
    )
}

export default Body;