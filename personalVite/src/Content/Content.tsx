import './Content.css';
import Resume from './Resume/Resume.jsx'
import Canvas from './Canvas/Canvas'
import React from 'react';

const Content = () => {
    return (
        <main>
            <div className="card">
                <Resume />
            </div>
            <div className="card">
                3d animation or more space for the resume
            </div>
            <div className="card">
                game content
            </div>
            <Canvas />
            <div className="card">contact info</div>
        </main>
    )
}

export default Content;