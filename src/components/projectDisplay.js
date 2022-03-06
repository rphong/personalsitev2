import React from 'react';
import {projectData} from '../data/projectData';
import Icon from '@mui/material/Icon';


const projectDisplay = () => {

    return (
            <div id="imgGallery">
                {projectData.map((slide, index) => {
                    return (
                        <div id='singleSlide' key={index}>
                            <div id='slideContent'>
                                <h2>{slide.title}</h2>
                                <h3>{slide.description}</h3>
                            </div>
                            <div id='icon'>
                                <Icon sx={{ fontSize: 50 }}>{slide.icon}</Icon>
                                <div id="iconBg1"/>
                                <div id="iconBg2"/>
                            </div>
                            <div id='slideBg'></div>
                            <div id='slideButton'>
                                <a href={slide.link} target='_blank' rel='noreferrer'>View Project</a>
                            </div>
                        </div>
                    );
                })}
            </div>
    );
}

export default projectDisplay;