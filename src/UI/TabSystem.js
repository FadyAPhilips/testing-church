import React, { useState } from 'react';
import './tabSystem.css';

const TabSystem = () => {
    const [activeTab, setActiveTab] = useState('section1');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="tab-system">
            <div className="tab-buttons">
                <div
                    className={activeTab === 'section1' ? 'active' : ''}
                    onClick={() => handleTabClick('section1')}
                >
                    The Coptic Church
                </div>
                <div
                    className={activeTab === 'section2' ? 'active' : ''}
                    onClick={() => handleTabClick('section2')}
                >
                    The Clergy
                </div>
                <div
                    className={activeTab === 'section3' ? 'active' : ''}
                    onClick={() => handleTabClick('section3')}
                >
                    Churches of NL
                </div>
            </div>
            <div className='flexCenter'>
                <div className="tab-content">
                    {activeTab === 'section1' && <Section1 />}
                    {activeTab === 'section2' && <Section2 />}
                    {activeTab === 'section3' && <Section3 />}
                </div>
            </div>
        </div>
    );
};

const Section1 = () => {
    return <div>History of the coptic church</div>;
};


const Section2 = () => {
    return <div>
        <div>Info About The Pope</div>
        <div>Info About Sayedna</div>
        <div>Info About Abouna</div>
    </div>;
};

const Section3 = () => {
    return <div>
        <div>Info about St. Maurice and the church in St. John's</div>
        <div>Info about the church in Gander</div>
        <div>Info about the church in Corner Brook</div>
    </div>;
};

export default TabSystem;
