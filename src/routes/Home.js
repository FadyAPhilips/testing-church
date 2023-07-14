import React from 'react';
import './app.css'
import Navbar from '../UI/Navbar'
import YTLive from '../UI/YouTubeLivestream'
import Donate from '../UI/Donate'
import Footer from '../UI/Footer';


const Home = (props) => {

    const CLIENT_ID = '886205024603-25r0afm9p5moodcoo79olkjuk0tbnj7h.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyCe_j5RMBo-fQNZ_xg_LGqoWxoFFpfriRg';
    const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
    const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];



    return (
        <div>
            <div className='titleDiv home'>
                <div className='title'>
                    <div className='titleText'>
                        Newfoundland Coptic Church
                    </div>
                </div>
            </div>
            <Navbar />
            <div className='flexCenter'>
                <div className='content flexCenter'>
                    <div className='Heading'>Upcoming Events</div>
                    <iframe src="https://embed.styledcalendar.com/#jrEKAn5zo1Waur3QIV6O" title="Styled Calendar" class="styled-calendar-container" className="calendar" data-cy="calendar-embed-iframe"></iframe>
                    <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                    <div className='Heading'>Live stream</div>
                    {/* <iframe width="80%" height="400px" src="https://www.youtube.com/embed/cQ4EkW1NASs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <YTLive />
                    <div className='Heading'>Donate</div>
                    <Donate channelId={"UCvaEBWbJ4EUvNfbgUJ_5W_w"} />
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Home;