import React from 'react';
import Hamburger from './Hamburger';

const Navigation = () => (
    <header id="header">
        <a href="/">Richard Phong</a>
        <nav>
            <ul id="laptopNav">
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <Hamburger/>
    </header>
);

export default Navigation;