import './Content.css';
import Resume from './Resume/Resume.jsx'

const Content = () => {
    return (
        <main>
            <div className="card"><Resume /></div>
            <div className="card">3d animation or more space for the resume</div>
            <div className="card">game content</div>
            <div className="card">contact info</div>
        </main>
    )
}

export default Content;