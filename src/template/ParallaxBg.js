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
                style={{ transform: `translateY(${offSetY * 0.3}px)` }}
            >
                <Circle className="circle1" circleType="LThick" />
                <Circle className="circle2" circleType="LThin" />
                <Circle className="circle3" circleType="LThick" />
                <Circle className="circle4" circleType="SThick" />
                <Circle className="circle5" circleType="SThin" />
                <Circle className="circle6" circleType="SThin" />
                <Circle className="circle7" circleType="LThin" />

            </div>
            <div id="pageContent">
                {props.children}
            </div>
        </div>
    );
};

export default Main;