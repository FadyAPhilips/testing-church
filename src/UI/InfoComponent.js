import React from 'react';
import './infoComponent.css';

const InfoComponent = ({ infoList }) => {


    return (
        <div className="info-container">
            {infoList.map((info, index) => (
                <div key={index} className={`info-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <img src={info.image} alt={info.text} className="info-image" />
                    <div>
                        <h2 className="info-text">{info.title}</h2>
                        <div className="info-text">
                            {info.textList.map((paragraph) => {
                                return <p>{paragraph}</p>
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoComponent;
