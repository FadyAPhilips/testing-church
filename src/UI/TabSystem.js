import React, { useState } from 'react';
import './tabSystem.css';
import '../routes/app.css'
import InfoComponent from './InfoComponent';

import popeImg from '../Assets/His-Hoiliness.jpg'
import bishopImg from '../Assets/bishop-boulos.jpeg'


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

    const infoList = [
        {
            image: "https://cdn.britannica.com/82/130682-050-21F7C58B/Coptic-Orthodox-Church-Amman-Jordan.jpg",
            title: "History of the coptic church",
            textList: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            ]
        },
    ];


    return <div>
        <InfoComponent infoList={infoList} />
    </div>;
};


const Section2 = () => {

    const infoList = [
        {
            image: popeImg,
            title: "His Holiness Pope Tawadros II",
            textList: [
                "His Holiness Pope Tawadros II, born Wagih Sobhy Baky Soliman on November 4th, 1952 in Mansoura, Egypt. He obtained a pharmacy degree from Alexandria University in 1975 and a fellowship from the British International Health Institute in England in 1985. After graduating from the Coptic Seminary in 1983, he worked as a manager in a pharmaceutical company owned by the Ministry of Health in Damanhour.",
                "In August 1986, His Holiness entered the Monastery of St. Pishoy in Wadi Elnatroun, becoming a monk in 1988 and a priest in 1989. He served alongside H.E. Metropolitan Pakhomius of Beheira starting in 1990. Ordained as a bishop in 1997 by the Late Pope Shenouda III, he focused on childhood and authored twelve books before assuming the papacy.",
                "On November 19th, 2012, His Holiness Pope Tawadros II was enthroned as the 118th Pope of Alexandria and Pope of the See of St. Mark at the Cathedral of St. Reweiss in Abbassiya, Cairo. The ceremony was led by H.E. Metropolitan Pakhomius of Beheira, attended by metropolitans, bishops, and Christian Church delegates."
            ]
        },
        {
            image: bishopImg,
            title: "His Grace Bishop Boulos.",
            textList: [
                'His Grace Bishop Boulos joined the Baramos Monastery on November 18th, 2001, and was ordained as a monk on February 23rd, 2004. Continuing his spiritual journey, he received ordination as a priest on March 7th, 2009.',
                'On June 9th, 2019, he was further honored by being ordained as the Bishop of the Coptic Orthodox Diocese of Ottawa, Montreal, and Eastern Canada. ',
                'With great joy and reverence, His Grace Bishop Boulos was officially enthroned on August 20th, 2019, to begin his sacred role as the bishop of the diocese.',
            ],
        },
        {
            image: bishopImg,
            title: "Father Demetrios",
            textList: [
                'His Grace Bishop Boulos joined the Baramos Monastery on November 18th, 2001, and was ordained as a monk on February 23rd, 2004. Continuing his spiritual journey, he received ordination as a priest on March 7th, 2009.',
                'On June 9th, 2019, he was further honored by being ordained as the Bishop of the Coptic Orthodox Diocese of Ottawa, Montreal, and Eastern Canada. ',
                'With great joy and reverence, His Grace Bishop Boulos was officially enthroned on August 20th, 2019, to begin his sacred role as the bishop of the diocese.',
            ],
        },
    ];

    return <div>
        <InfoComponent infoList={infoList} />
    </div>;
};

const Section3 = () => {

    const infoList = [
        {
            image: popeImg,
            title: "St. Maurice Coptic Church, St. John's",
            textList: [
                "His Holiness Pope Tawadros II, born Wagih Sobhy Baky Soliman on November 4th, 1952 in Mansoura, Egypt. He obtained a pharmacy degree from Alexandria University in 1975 and a fellowship from the British International Health Institute in England in 1985. After graduating from the Coptic Seminary in 1983, he worked as a manager in a pharmaceutical company owned by the Ministry of Health in Damanhour.",
                "In August 1986, His Holiness entered the Monastery of St. Pishoy in Wadi Elnatroun, becoming a monk in 1988 and a priest in 1989. He served alongside H.E. Metropolitan Pakhomius of Beheira starting in 1990. Ordained as a bishop in 1997 by the Late Pope Shenouda III, he focused on childhood and authored twelve books before assuming the papacy.",
                "On November 19th, 2012, His Holiness Pope Tawadros II was enthroned as the 118th Pope of Alexandria and Pope of the See of St. Mark at the Cathedral of St. Reweiss in Abbassiya, Cairo. The ceremony was led by H.E. Metropolitan Pakhomius of Beheira, attended by metropolitans, bishops, and Christian Church delegates."
            ]
        },
        {
            image: bishopImg,
            title: "St. Mary, St. Verina and St. Moses the Black Coptic Church, Gander",
            textList: [
                'The Church in Gander was started by generous donation froms local families in 2023.',
                'The church was established under the auspices of his grace Bishop Boulos and Father Demetrios. The Church also includes a confrence area and living arangements to allow for regional and local retreats.',
            ],
        },
    ];

    return <div>
        <InfoComponent infoList={infoList} />
    </div>;
};

export default TabSystem;
