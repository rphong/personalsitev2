import React from 'react';
import { projectData } from '../data/projectData';
import Icon from '@mui/material/Icon';


const ProjectDisplay = () => {

    return (
        <div id="projGallery">
            {projectData.map((slide, index) => {
                return (
                    <div className={slide.title === '' ? 'singleProjSlide blank' : 'singleProjSlide'} key={index}>
                        <div className='slideContent'>
                            <h2>{slide.title}</h2>
                            <h3>{slide.description}</h3>
                            {slide.title === '' && <div className='blankProj'>
                                <Icon sx={{ fontSize: 100, color: '#bbbbb7', margin: '4rem 0' }}>rocket_launch_outline</Icon>
                                <h2>
                                    Future Projects will be added here!
                                </h2>
                            </div>}
                        </div>
                        {slide.icon !== '' && <div className='icon'>
                            <Icon sx={{ fontSize: 50 }}>{slide.icon}</Icon>
                            <div className="iconBg1" />
                            <div className="iconBg2" />
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

export default ProjectDisplay;