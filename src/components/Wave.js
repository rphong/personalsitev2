import React from 'react';

const Wave = (props) => (
    <div className='waveDiv'>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className={props.class}>
            <path d="M0.00,49.99 C251.31,22.21 254.14,109.05 500.00,49.99 L500.00,0.00 L0.00,0.00 Z" ></path>
        </svg>
    </div>
);

export default Wave;