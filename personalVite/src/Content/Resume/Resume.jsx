import "./Resume.css"
import { IconContext } from "react-icons"
import { FaGraduationCap } from "react-icons/fa6"



// const arrayNames = 

const Resume = () => {

    return (
        //Warning: each child in list should have a "key" prop. 
        <div className="resume-body">
            <IconContext.Provider value={{ className: "icon" }}>
                <div className="card idle">
                    <div className="card-icon"><FaGraduationCap /></div>
                    <div className="card-title">Education</div>
                </div>
                <div className="card idle">
                    <div className="card-icon"></div>
                    <div className="card-title">Work Experience</div>
                </div>
                <div className="card idle">
                    <div className="card-icon"></div>
                    <div className="card-title">Technical Experience</div>
                </div>
                <div className="card idle">
                    <div className="card-icon"></div>
                    <div className="card-title">Extracurriculars</div>
                </div>
            </ IconContext.Provider>
        </div>
    )
}


export default Resume;