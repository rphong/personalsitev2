import React from 'react';

const Main = (props) => (
    <div className="wrapper" style={props.style}>
        {props.children}
    </div>
);

export default Main;