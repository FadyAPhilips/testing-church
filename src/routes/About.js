import React from 'react';
import './app.css'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer';
import Tabs from '../UI/TabSystem'


const About = (props) => {

    return (
        <div>
            <div className='titleDiv about' >
                <div className='title'>
                    <div className='titleText'>
                        About The Church
                    </div>
                </div>
            </div>
            <Navbar />
            <div className='flexCenter pageContainer'>
                <Tabs />
            </div>
            <Footer />
        </div>
    );
};

export default About;