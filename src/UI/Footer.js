import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Contact us</h3>
                <div className="contact-section">
                    <div className="contact-column">
                        <h4>Contact Father Demetrios</h4>
                        <div>info@stmaurice.net</div>
                        <div>demetrios.st.maurice@gmail.com</div>
                    </div>
                    <div className="contact-column">
                        <h4>
                            <a href="https://goo.gl/maps/kWjVDiW29UY9ZdmE9">St. Maurice Orthodox Church!</a>
                        </h4>
                        <p>34 Jersey Ave, Mount Pearl, NL, A1N 1T9</p>
                    </div>
                </div>
                <div className="copy-section">
                    <p>&copy; 2023 Your App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;