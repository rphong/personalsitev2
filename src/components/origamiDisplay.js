import React from 'react';
import { origamiData } from '../data/origamiData';

const projectDisplay = (props) => {

    return (
        <div id="origamiGallery">
            {origamiData.map((section, index) => {
                if (!props.mobile) {
                    return (
                        <div className='singleOrigSection' key={index}>
                            {index % 2 === 1 && <div className='sectionDescription'>
                                <h2 className='bold'>{section.title}</h2>
                                <h3>{section.description}</h3>
                                <div id='sectionLink'>
                                    <a href={section.link} target='_blank' rel='noreferrer'>Instructions ({section.linkSite})</a>
                                </div>
                            </div>}
                            <div className={index % 2 === 0 ? 'origamiImgContainer left' : 'origamiImgContainer right'}>
                                <img className="origamiImg" src={section.path} alt={section.title}></img>
                                <div className="origamiImgBg" />
                            </div>
                            {index % 2 === 0 && <div className='sectionDescription'>
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
                    <div className='singleOrigSection' key={index}>
                        <div className="origamiImgContainer">
                            <img className="origamiImg" src={section.path} alt={section.title}></img>
                            <div className="origamiImgBg" />
                        </div>
                        <div className='sectionDescription'>
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