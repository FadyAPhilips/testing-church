import React from 'react';
import './home.css'
import Navbar from '../UI/Navbar'

const Home = (props) => {

    return (
        <div>
            <div id='titleDiv'>
                <div id='title'>
                    <div id='titleText'>
                        Newfoundland Coptic Church
                    </div>
                </div>
            </div>
            <Navbar />
            <div className='Heading'>Upcoming Events</div>
            <div>Calender</div>
        </div>
    );
};

export default Home;