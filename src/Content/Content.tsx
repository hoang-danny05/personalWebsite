import './Content.css';
import Resume from './Resume/Resume.jsx'
import Canvas from './Canvas/Canvas'
import React from 'react';

const Content = () => {
    return (
        <main>
            <section>
                <Resume />
            </section>
            <section>
                3d animation or more space for the resume
            </section>
            <section>
                game content
            </section>
            <Canvas />
            <section>
                contact info
            </section>
        </main>
    )
}

export default Content;