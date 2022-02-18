import React, {useState} from 'react';
import {projectData} from '../data/projectData';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


const ImageSlider = () => {

    const[current, setCurrent] = useState(0);
    const length = projectData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
    };

    return (//add title as another div in image gallery
        <div id="imgGallery">
            <AiOutlineArrowLeft className='leftArrow' size='2x' onClick={prevSlide}/>
            {projectData.map((slide, index) => {
                return (
                    <div id='singleSlide' className={index === current ? 'slideActive' : 'slideSwitch'}>
                        {index === current && (
                            <a href={slide.link} target='_blank' rel="noreferrer">
                                <div id='description'>
                                    <h2>{slide.description}</h2>
                                </div>
                                <div id='imgTitle'>
                                    <h1>{slide.title}</h1>
                                </div>
                                <img src={slide.path} alt='error'/>
                            </a>
                        )}
                    </div>
                );
            })}
            <AiOutlineArrowRight className='rightArrow' size='2x' onClick={nextSlide}/>
        </div>
    );
}

export default ImageSlider;