import React from 'react'

import Main from '../template/Main'

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";

const Contact = () => (

    <Main style={{margin:'0 0 3rem 0'}}>
        <div id="contact">
            <h1 class="bold">Contact</h1>
            <h3>You can email me at richard.phong424@gmail.com!</h3>
            <a href="https://github.com/rphong" target="_blank" rel="noreferrer"><AiFillGithub className='icon' size={'1x'}/></a>
            <a href="https://www.linkedin.com/in/richard-phong-36b297220/" target="_blank" rel="noreferrer"><AiFillLinkedin className='icon' size={'1x'}/></a>
            <a href="https://github.com/rphong" target="_blank" rel="noreferrer"><RiNewspaperLine className='icon' size={'1x'}/></a>
        </div>
    </Main>
);

export default Contact;