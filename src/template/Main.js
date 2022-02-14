import React from 'react';


const Main = (props) => (
    <div id="wrapper">
        <div id="main">
            {props.children}
        </div>
    </div>
);

export default Main;