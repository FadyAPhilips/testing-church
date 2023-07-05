import React, { useEffect, useState } from 'react';
import './navbar.css'

const Navbar = () => {
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [shadow, setShowShadow] = useState("0 2px 4px rgba(0, 0, 0, 0.0)");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 50) {
                setNavbarBg('white');
                setShowShadow('0 2px 4px rgba(0, 0, 0, 0.5)');
            } else {
                setNavbarBg('transparent');
                setShowShadow('0 2px 4px rgba(0, 0, 0, 0.0)');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navbar" style={{ backgroundColor: navbarBg, boxShadow: shadow }}>
            <div className="navbar-nav">
                <div className="nav-item"><a href="/" className={navbarBg === 'white' ? 'nav-link black' : 'nav-link'}>Home</a></div>
                <div className="nav-item"><a href="/about" className={navbarBg === 'white' ? 'nav-link black' : 'nav-link'}>About</a></div>
                <div className="nav-item"><a href="#" className={navbarBg === 'white' ? 'nav-link black' : 'nav-link'}>Gallery</a></div>
                <div className="nav-item"><a href="#" className={navbarBg === 'white' ? 'nav-link black' : 'nav-link'}>Contact</a></div>
            </div>
        </div>
    );
}

export default Navbar;

