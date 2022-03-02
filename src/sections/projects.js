import React from 'react';

import Main from '../template/Main';
import ProjectDisplay from '../components/projectDisplay';
import Circle from '../components/CircleDec';

const Projects = () => (

    <Main >
        <div id="projects">
            <h2 id="subtitle">PROJECTS</h2>
            <h1 class="bold">Showcasing My Coding Journey!</h1>
            <Circle class="circle2" circleType="SThin"/>
            <ProjectDisplay/>
            <Circle class="circle3" circleType="SThin"/>
        </div>
        <div id="block"/>
                 <h1>h2</h1>
        <div id="block"/>
    </Main>
);

export default Projects;