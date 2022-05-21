import React from 'react';
import { projectData } from '../data/projectData';
import Icon from '@mui/material/Icon';


const projectDisplay = () => {

    return (
        <div id="projGallery">
            {projectData.map((slide, index) => {
                return (
                    <div id='singleSlide' className={slide.title === '' ? 'blank' : ''} key={index}>
                        <div id='slideContent'>
                            <h2>{slide.title}</h2>
                            <h3>{slide.description}</h3>
                            {slide.title === '' && <div id='blankProj'>
                                <Icon sx={{ fontSize: 100, color: '#bbbbb7', margin: '3rem 0' }}>rocket_launch_outline</Icon>
                                <h2>
                                    Future Projects will be added here!
                                </h2>
                            </div>}
                        </div>
                        {slide.icon !== '' && <div id='icon'>
                            <Icon sx={{ fontSize: 50 }}>{slide.icon}</Icon>
                            <div id="iconBg1" />
                            <div id="iconBg2" />
                        </div>}
                        {slide.title !== '' && <div id='slideButton'>
                            <a href={slide.link} target='_blank' rel='noreferrer'>View Project</a>
                        </div>}
                    </div>
                );
            })}
        </div>
    );
}

export default projectDisplay;