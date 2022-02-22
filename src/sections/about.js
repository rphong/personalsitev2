import React from 'react';

import Main from '../template/Main';
import Wave from '../components/Wave';
import Me from '../resources/img/me.png';

const About = () => (

    <Main style={{margin:'3rem 0 0 0'}} id="about">
        <div id="about" >
            <img src={Me} alt="me" id="meImg"></img>
            <h1 class="bold">About Me</h1>
            <h3>
                Hello! My name is Richard and I'm currently a student at the University of Houston, majoring in CS. I enjoy 
                exploring cs related fields such as game development and competitive programming. Currently, I'm learning
                web development along with a bit of 3d modeling!
            </h3>
        </div>
        <Wave class='wave waveAbout'/>
    </Main>
);

export default About;