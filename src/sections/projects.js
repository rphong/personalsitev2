import React from 'react';
import ImageSlider from '../components/ImageSlider';

import Main from '../template/Main';
import Wave from '../components/Wave';


const Projects = () => (

    <Main >
        <div id="projects">
            <h1 class="bold">Projects</h1>
            <ImageSlider/>
        </div>
        <Wave class='wave waveProjects'/>
    </Main>
);

export default Projects;