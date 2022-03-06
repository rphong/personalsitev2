import React, { useState, useEffect } from 'react';
import Circle from '../components/CircleDec';

const Main = (props) => {

    const [offSetY, setOffSetY] = useState(0);
    const handleScroll = () => setOffSetY(window.scrollY); 

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="app">
            <div 
                id="parallaxBg"
                style={{transform: `translateY(-${offSetY * 0.25}px)`}}
            >
                <Circle className="circle1" circleType="LThick" />
                <Circle className="circle2" circleType="LThin" />
                <Circle className="circle3" circleType="LThick" />
                <Circle className="circle4" circleType="SThick" />

            </div>
            <div id="pageContent">
                {props.children}
            </div>
        </div>
    );
};

export default Main;