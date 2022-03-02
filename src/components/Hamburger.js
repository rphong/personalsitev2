import React, {useState, useRef, useEffect} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

const Hamburger = () => {

    const dropDownRef = useRef(null);
    const iconRef = useRef(null);
    const [open, toggleOpen] = useState(false);
    const [openClass, toggleClass] = useState("");

    const changeState = () => {
        toggleOpen(open => !open);
        changeClass();
    }

    const changeClass = () => {
        //reason for !open is that useState is async and idk how to handle that yet, somehow use await toggleopen?
        toggleClass(() => !open ? 'slide-in' : 'slide-out');
    }   

    useEffect(() => {
        

        const checkClick = e => {
            //if clicked outside, close
            if (open && dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                changeState();
            }
            //if not open and icon clicked, open
            else if(!open && iconRef.current.contains(e.target)) {
                changeState();
            }

        }

        document.addEventListener("mousedown", checkClick)
        //cleanup
        return () => {
          document.removeEventListener("mousedown", checkClick)
        }
    })

    return (
        <IconContext.Provider value={{ color: 'black', size: '35%' }}>
            <div id="hamburgerMenu" >
                <div id="hamburgerIcon" ref={iconRef} ><GiHamburgerMenu/></div>
                    <ul id="mobileNav" ref={dropDownRef} className={`${openClass}`}>
                        <li><a onClick={() => changeState()} href="#about">About Me</a></li>
                        <li><a onClick={() => changeState()} href="#projects">Projects</a></li>
                        <li><a onClick={() => changeState()} href="#hobbies">Hobbies</a></li>
                        <li><a onClick={() => changeState()} href="#contact">Contact</a></li>
                    </ul>
            </div>
        </IconContext.Provider>
    );
};

export default Hamburger;