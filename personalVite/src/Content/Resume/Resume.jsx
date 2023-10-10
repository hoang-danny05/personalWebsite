import "./Resume.css"
import { IconContext } from "react-icons"
import { FaGraduationCap } from "react-icons/fa6"
import { MdWork } from "react-icons/md"
import { BiGitRepoForked } from "react-icons/bi"
import { IoMdJet } from "react-icons/io"




// const arrayNames = 

const Resume = () => {

    return (
        //Warning: each child in list should have a "key" prop. 
        <div className="resume-body">
            <IconContext.Provider value={{ className: "icon-large" }}>
                <div className="card idle">
                    <div className="card-icon"><FaGraduationCap /></div>
                    <div className="card-title">Education</div>
                </div>
                <div className="card idle">
                    <div className="card-icon"><MdWork /></div>
                    <div className="card-title">Work Experience</div>
                </div>
                <div className="card idle">
                    <div className="card-icon"><BiGitRepoForked /></div>
                    <div className="card-title">Technical Experience</div>
                </div>
                <div className="card idle">
                    <div className="card-icon"><IoMdJet /></div>
                    <div className="card-title">Extracurriculars</div>
                </div>
            </ IconContext.Provider>
        </div>
    )
}


export default Resume;