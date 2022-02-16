import React from 'react';


const Main = (props) => (
    <div id="wrapper" style={props.style}>
        <div id="main">
            {props.children}
        </div>
    </div>
);

export default Main;