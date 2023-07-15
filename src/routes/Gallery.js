import React from 'react';
import './app.css'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer';

const Gallery = (props) => {

    return (
        <div>
            <div className='titleDiv gallery' >
                <div className='title'>
                    <div className='titleText'>
                        Photo Gallery
                    </div>
                </div>
            </div>
            <Navbar />
            <div className='flexCenter pageContainer'>
                <h1>Coming Soon!</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;