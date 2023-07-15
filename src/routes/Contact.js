import React from 'react';
import './app.css'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer';

const Contact = (props) => {

    return (
        <div>
            <div className='titleDiv contact' >
                <div className='title'>
                    <div className='titleText'>
                        Where to Find Us
                    </div>
                </div>
            </div>
            <Navbar />
            <div className='flexCenter pageContainer'>
                <div className='Heading'>Our Churches</div>
                <div className='flexColumns ourChurches'>
                    <div className='map'>
                        <h2>St. Maurice Coptic Church</h2>
                        <h2>St. John's</h2>
                        <p>34 Jersey Ave</p>
                        <p>Mount Pearl</p>
                        <p>NL, Canada</p>
                        <p>A1N 1T9</p>
                        <h3>Church Email</h3>
                        <p>info@stmaurice.net</p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.631822279394!2d-52.801117!3d47.516560999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0cbcbe476f3cfd%3A0xac04f0da000b881f!2s34%20Jersey%20Ave%2C%20Mount%20Pearl%2C%20NL%20A1N%201T9!5e0!3m2!1sen!2sca!4v1689428538765!5m2!1sen!2sca"
                            className='map' height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className='flexColumns ourChurches'>
                    <div className='map'>
                        <h2>St. Mary, St. Verina and St. Moses the Black Coptic Church</h2>
                        <h2>Gander</h2>
                        <p>16 bishop place</p>
                        <p>Gander</p>
                        <p>NL, Canada</p>
                        <p>A1V 1V3</p>
                        <h3>Church Email</h3>
                        <p>smvmcoc@gmail.com</p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.5329424255515!2d-54.61945599809191!3d48.95680455760832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b76f2f4d7878acb%3A0x99336f1bcada1895!2s16%20Bishop%20Pl%2C%20Gander%2C%20NL%20A1V%201V3!5e0!3m2!1sen!2sca!4v1689434241664!5m2!1sen!2sca"
                            className='map' height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className='Heading'>Contact Father Demetrios</div>
                <h3>demetrios.st.maurice@gmail.com</h3>
                <div className='Heading'>Useful Links</div>
                <div className='flexColumns ourChurches'>
                    <div className='map'>
                        <h3><a href='https://eccopts.ca/' target="_blank">
                            Coptic Orthodox Diocese of Ottawa, Montreal, and Eastern Canada
                        </a></h3>
                        <h3><a href='http://suscopts.org/resources/' target="_blank">
                            Coptic Orthodox Diocese of Southern United States Resources
                        </a></h3>
                    </div>
                    <div className='map'>
                        <h3><a href='http://www.coptic.net/EncyclopediaCoptica/' target="_blank">
                            The Christian Coptic Orthodox Church Of Egypt
                        </a></h3>
                        <h3><a href='https://st-takla.org/' target="_blank">
                            St. Takla Haymanout Coptic Orthodox Website
                        </a></h3>
                    </div>
                </div>
                <h3>Find a bug on this website? Contact one of our developers:</h3>
                <div className='flexColumns ourChurches'>
                    <p>Mark Armanious: markarmanus@gmail.com</p>
                    <p>Fady Philips: fadyaphilips97@gmail.com</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;