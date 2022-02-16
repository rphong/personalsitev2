import React, {useState, useRef, useEffect} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = () => {

    const dropDownRef = useRef(null);
    const iconRef = useRef(null);
    const [open, toggleOpen] = useState(false);
    const [openClass, toggleClass] = useState("");

    useEffect(() => {
        const checkClick = e => {
            //if clicked outside, close
            if (open && dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                toggleOpen(false);
            }
            //if not open and icon clicked, open
            if(!open && iconRef.current.contains(e.target)) toggleOpen(true);

        }
        document.addEventListener("mousedown", checkClick)
        //cleanup
        return () => {
          document.removeEventListener("mousedown", checkClick)
        }
    }, [open])

    const changeClass = () => {
        toggleClass(open ? 'slide-in' : 'slide-out');
    }

    return (
        <div id="hamburgerMenu" >
            <div id="hamburgerIcon" ref={iconRef} onClick={changeClass} ><GiHamburgerMenu size='35%'/></div>
                <ul id="mobileNav" ref={dropDownRef} class={`${openClass}`}>
                    <li><a onClick={() => toggleOpen(false)} href="#about">About Me</a></li>
                    <li><a onClick={() => toggleOpen(false)} href="#projects">Projects</a></li>
                    <li><a onClick={() => toggleOpen(false)} href="#hobbies">Hobbies</a></li>
                    <li><a onClick={() => toggleOpen(false)} href="#contact">Contact</a></li>
                </ul>
        </div>
    );
};

export default Hamburger;