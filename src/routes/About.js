import React from 'react';
import './app.css'
import Navbar from '../UI/Navbar'
import Tabs from '../UI/TabSystem'


const About = (props) => {
    // Component logic and state hooks (if needed)

    return (
        <div>
            <div className='titleDiv about' >
                <div id='title'>
                    <div id='titleText'>
                        About The Church
                    </div>
                </div>
            </div>
            <Navbar />
            <div className='flexCenter pageContainer'>
                <Tabs />
            </div>
        </div>
    );
};

export default About;