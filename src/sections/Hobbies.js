import React from 'react';

import Main from '../template/Main';

import Boxes from '../resources/img/origami/boxes.jpg';
import Butterflies from '../resources/img/origami/butterflies.jpg';
import Hummingbird from '../resources/img/origami/hummingbird.jpg';
import Torus from '../resources/img/origami/torus.jpg';
import Crane from '../components/Crane';


const Hobbies = () => (

    <Main>
        <div id="hobbies">
            <Crane x={-5} y ={4} z={-5}/>

            <h1 className="bold">Hobbies</h1>
            <h3>
                In my free time, I do a mix of video games, origami, and occasional badminton! <br/>
                <div id="origamiGallery">
                    <img src={Boxes} alt='boxes'></img>
                    <img src={Butterflies} alt='butterflies'></img>
                    <img src={Hummingbird} alt='hummingbird'></img>
                    <img src={Torus} alt='torus'></img>
                </div>

            </h3>
        </div>
    </Main>
);

export default Hobbies;