import React, {useState} from 'react';
import {projectData} from '../data/projectData';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";


const ImageSlider = () => {

    const[current, setCurrent] = useState(0);
    const length = projectData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
    };

    return (
        <IconContext.Provider value={{color:'white', size:'2x'}}>
            <div id="imgGallery">
                <AiOutlineArrowLeft className='leftArrow' onClick={prevSlide}/>
                {projectData.map((slide, index) => {
                    return (
                        <div id='singleSlide' className={index === current ? 'slideActive' : 'slideSwitch'}>
                            {index === current && (
                                <a href={slide.link} target='_blank' rel="noreferrer">
                                    <div id='description'>
                                        <h2>{slide.description}</h2>
                                    </div>
                                    <div id='imgTitle'>
                                        <h2>{slide.title}</h2>
                                    </div>
                                </a>
                            )}
                        </div>
                    );
                })}
                <AiOutlineArrowRight className='rightArrow'onClick={nextSlide}/>
            </div>
        </IconContext.Provider>
    );
}

export default ImageSlider;