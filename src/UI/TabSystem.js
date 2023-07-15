import React, { useState } from 'react';
import './tabSystem.css';
import '../routes/app.css'
import InfoComponent from './InfoComponent';

import popeImg from '../Assets/His-Hoiliness.jpg'
import bishopImg from '../Assets/bishop-boulos.jpeg'
import cathedralNight from '../Assets/cathedral-night.png'
import stMaurice from '../Assets/stMaurice.jpeg'


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
            image: "https://www.pravmir.com/wp-content/uploads/2012/01/St.-Mark-the-Apostle.jpg",
            title: "History of the coptic church",
            textList: [
                'The term "Copt" is derived from the Greek word "Aigyptos" and refers to Egyptian Christians. It also refers to the last stage of the ancient Egyptian language script. The word "Coptic" is associated with the distinctive art, architecture, and culture that developed as an early expression of the Christian faith in Egypt.',
                "The Coptic Church is based on the teachings of Saint Mark, one of the four evangelists and the writer of the oldest canonical gospel. Saint Mark brought Christianity to Egypt during the first century, a few decades after the ascension of Jesus. St. Mark became the first Patriarch of the Coptic Orthodox Church with the See established in Alexandria, Egypt.",
                'The Coptic Church has made significant contributions to Christian theology, particularly in protecting it from Gnostic heresies. The Coptic Church has produced numerous biblical and theological texts, and the Coptic language has been used for the translation of the Holy Bible since the second century. The Catechetical School of Alexandria, established around 190 A.D., became a prominent institution of religious learning in Christendom',
            ]
        },
        {
            image: cathedralNight,
            title: "",
            textList: [
                'Monasticism originated in Egypt and played a crucial role in shaping the character of the Coptic Church. Saints like Saint Anthony, Saint Pachomius, and Saint Paul are notable figures in early Coptic monasticism. Egyptian monasticism influenced the development of monastic movements in other regions.',
                "The Patriarchs and Popes of Alexandria held influential positions in Christian theology during the Eastern Roman Empire (Byzantine Empire). However, political interference in church affairs led to conflicts, notably the Council of Chalcedon in 451 A.D., where the Coptic Church was accused of monophysitism. The Copts believe in the two natures of Christ, human and divine, united in one nature without confusion or separation.",
                'Throughout history, the Coptic Church has faced persecution from various rulers and groups. Despite this, the Copts have maintained their faith and their distinctive identity. The Coptic Church has advocated for the separation of church and state and has not sought political power.',
                'The Coptic Church continues to thrive with a significant number of adherents in Egypt and a diaspora community in various countries. Copts observe seven sacraments, celebrate major and minor feasts, and follow strict fasting periods. The clergy is headed by the Pope of Alexandria, and there are bishops, priests, and a lay council involved in the governance of the church.'
            ]
        },
    ];


    return <div>
        <InfoComponent infoList={infoList} />
        <div>This information was obtained from the <a href='http://www.coptic.net/EncyclopediaCoptica/' target="_blank">Encyclopedia Coptica</a></div>
        <div>The image of st. Mark was obtained from <a href='https://www.pravmir.com/coptic-icons/' target="_blank">pravmir.com/coptic-icons</a></div>
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
        <div>This information was obtained from the <a href='https://eccopts.ca/' target="_blank">Coptic Orthodox Diocese of Ottawa, Montreal, and Eastern Canada</a></div>
    </div>;
};

const Section3 = () => {

    const infoList = [
        {
            image: stMaurice,
            title: "St. Maurice Coptic Church, St. John's",
            textList: [
                'The Church in Gander was started by generous donation froms local families in 2023.',
                'The church was established under the auspices of his grace Bishop Boulos and Father Demetrios. The Church also includes a confrence area and living arangements to allow for regional and local retreats.',
            ],
        },
        {
            image: stMaurice,
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
