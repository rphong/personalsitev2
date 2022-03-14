import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Main from '../template/Main';
import OrigamiDisplay from '../components/origamiDisplay';
import Crane from '../components/Crane';


const Hobbies = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 769px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1024px)'})

    return (
        <Main>
            <div id="hobbies">
                {isLaptop && <Crane className="Crane1" />}

                <h2 id="title">HOBBIES</h2>
                <h1 id="subtitle" className="bold">My Origami Gallery!</h1>
                <OrigamiDisplay mobile={isMobile} />
            </div>
        </Main>
    );
};

export default Hobbies;