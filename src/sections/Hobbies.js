import React from 'react';

import Main from '../template/Main';

import Boxes from '../resources/img/origami/boxes.jpg';
import Butterflies from '../resources/img/origami/butterflies.jpg';
import Hummingbird from '../resources/img/origami/hummingbird.jpg';
import Torus from '../resources/img/origami/torus.jpg';
import Wave from '../components/Wave';

const Hobbies = () => (

    <Main>
        <div id="hobbies">
            <h1 class="bold">Hobbies</h1>
            <h3>
                In my free time, I do a mix of video games, origami, and occasional badminton! <br/>
                I've played a variety of video games such as:
                <ul>
                    <li>Elsword</li>
                    <li>RoTMG</li>
                    <li>Hearthstone</li>
                    <li>League</li>
                    <li>Counter-Strike</li>
                    <li>Valorant</li>
                    <li>BTD6</li>
                </ul>
                I also love to do origami!
                <div id="origamiGallery">
                    <img src={Boxes} alt='boxes'></img>
                    <img src={Butterflies} alt='butterflies'></img>
                    <img src={Hummingbird} alt='hummingbird'></img>
                    <img src={Torus} alt='torus'></img>
                </div>

            </h3>
        </div>
        <Wave class='wave waveHobbies'/>
    </Main>
);

export default Hobbies;