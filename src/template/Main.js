import React from 'react';


const Main = (props) => (
    <div id="wrapper" style={props.style}>
        {props.children}
    </div>
);

export default Main;