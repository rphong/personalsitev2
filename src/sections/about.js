import React from 'react';

import Main from '../template/Main';
import Me from '../resources/img/me.png';
import Wave from '../components/Wave';

const About = () => (

    <Main style={{ margin: '0 0 0 0' }}>
        <div id="about">
            <div id="imgMeContainer">
                <img src={Me} alt="me" id="meImg"></img>
                <div id="imgMeBg"></div>
            </div>
            <h1 className="bold">Hi I'm <span>Richard!</span></h1>
            <h2>
                I'm currently a student at the University of Houston, majoring in CS. I enjoy
                exploring CS related fields such as game development and competitive programming. Currently, I'm learning
                web development along with a bit of 3d modeling!
            </h2>
            <p
            role="img"
            aria-label=""
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
          >
          </p>  
        </div>
        <Wave />
    </Main>
);

export default About;