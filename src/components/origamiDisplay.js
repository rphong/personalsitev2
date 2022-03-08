import React from 'react';
import { origamiData } from '../data/origamiData';

const projectDisplay = (props) => {

    return (
        <div id="origamiGallery">
            {origamiData.map((section, index) => {
                if (!props.mobile) {
                    return (
                        <div id='singleSection' key={index}>
                            {index % 2 === 1 && <div id='sectionDescription'>
                                <h2 className='bold'>{section.title}</h2>
                                <h3>{section.description}</h3>
                                <div id='sectionLink'>
                                    <a href={section.link} target='_blank' rel='noreferrer'>Instructions ({section.linkSite})</a>
                                </div>
                            </div>}
                            <div id="origamiImgContainer" className={index % 2 === 0 ? 'left' : 'right'}>
                                <img id="origamiImg" src={section.path} alt={section.title}></img>
                                <div id="origamiImgBg" />
                            </div>
                            {index % 2 === 0 && <div id='sectionDescription'>
                                <h2 className='bold'>{section.title}</h2>
                                <h3>{section.description}</h3>
                                <div id='sectionLink'>
                                    <a href={section.link} target='_blank' rel='noreferrer'>Instructions ({section.linkSite})</a>
                                </div>
                            </div>}
                        </div>

                    );
                }
                return (
                    <div id='singleSection' key={index}>
                        <div id="origamiImgContainer">
                            <img id="origamiImg" src={section.path} alt={section.title}></img>
                            <div id="origamiImgBg" />
                        </div>
                        <div id='sectionDescription'>
                            <h2 className='bold'>{section.title}</h2>
                            <h3>{section.description}</h3>
                            <div id='sectionLink'>
                                <a href={section.link} target='_blank' rel='noreferrer'>Instructions ({section.linkSite})</a>
                            </div>
                        </div>
                        
                    </div>
                );
            })}
        </div>
    );
}

export default projectDisplay;