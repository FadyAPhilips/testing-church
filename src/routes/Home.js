import React from 'react';
import './app.css'
import Navbar from '../UI/Navbar'

const Home = (props) => {

    return (
        <div>
            <div className='titleDiv home'>
                <div id='title'>
                    <div id='titleText'>
                        Newfoundland Coptic Church
                    </div>
                </div>
            </div>
            <Navbar />
            <div className='Heading'>Upcoming Events</div>
            <div>Calender</div>
        </div >
    );
};

export default Home;