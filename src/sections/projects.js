import React from 'react';
import Main from '../template/Main';
import ProjectDisplay from '../components/ProjectDisplay';

const Projects = () => {
    return(
        <Main >
            <div id="projects">
                <h2 id="title">PROJECTS</h2>
                <h1 id="subtitle" className="bold">Showcasing My Coding Journey!</h1>
                <ProjectDisplay/>
            </div>
            <div id="block" />
        </Main>
    );
};

export default Projects;