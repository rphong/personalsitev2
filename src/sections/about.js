import React from 'react';

import Main from '../template/Main';
import Me from '../resources/img/me.png';
import Wave from '../components/Wave';
import Circle from '../components/CircleDec';

const About = () => (

    <Main style={{margin:'0 0 0 0'}} id="about">
        <div id="about" >
            <div id="imgMeContainer">
                <img src={Me} alt="me" id="meImg"></img>
                <div id="imgMeBg"></div>
            </div>
            <h1 class="bold">Hi I'm <span>Richard!</span></h1>
            <h2>
                I'm currently a student at the University of Houston, majoring in CS. I enjoy 
                exploring cs related fields such as game development and competitive programming. Currently, I'm learning
                web development along with a bit of 3d modeling!
            </h2>
        </div>
        <Wave/>
        <Circle class="circle1" circleType="LThick"/>
    </Main>
);

export default About;