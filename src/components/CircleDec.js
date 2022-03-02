import React from 'react';

import {circleTypes} from '../data/circleDecTypes';

const CircleDec = (props) => (
    <div className={'circleDiv ' + props.class}>
        {circleTypes.map((circle) => {
            if(circle.type === props.circleType)
                return(

                    <svg xmlns="http://www.w3.org/2000/svg" id="sv" width="150" height="150" viewBox="0 0 150 150">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="51%" x2="100%" y2="49%">
                                <stop offset="5%" stop-color="#00d08466"></stop>
                                <stop offset="95%" stop-color="#0499f266"></stop>
                            </linearGradient>
                        </defs>
                            <path id="0" fill="url(#gradient)"d={circle.path}></path>
                    </svg>
                );
        })}
    </div>
);

export default CircleDec;