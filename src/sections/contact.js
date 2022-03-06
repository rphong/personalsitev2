import React from 'react'

import Main from '../template/Main'

import resume from '../resources/RPhong Resume 2022.pdf';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";

const Contact = () => (

    <Main>
        <div id="contact">
            <h1 className="bold">Contact</h1>
            <h3>You can email me at richard.phong424@gmail.com!</h3>
            <a href="https://github.com/rphong" target="_blank" rel="noreferrer"><AiFillGithub className='icon' size={56}/></a>
            <a href="https://www.linkedin.com/in/richard-phong-36b297220/" target="_blank" rel="noreferrer"><AiFillLinkedin className='icon' size={56}/></a>
            <a href={resume} target="_blank" rel="noreferrer"><RiNewspaperLine className='icon' size={56}/></a>
        </div>
    </Main>
);

export default Contact;