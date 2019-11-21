import React from 'react';
import '../Style/HeaderContent.css';
import '../Style/SkyAnimation.css';
import logo from '../Images/headerOiw.png';

const HeaderComponents = ()=>{

    return(
        <div className="banner">
            <img className="banner__img" src={logo} alt='logo'></img>

            <div className="sky">
            <div className="stars"></div>
            <div className="stars1"></div>
            <div className="stars2"></div>
            <div className="shooting-stars"></div>

            </div>
            <div className="quote">
                <p className="quote__text">
                   "Jeśli umiecie diagnozować radość dziecka i jej natężenie, musicie dostrzec,że najwyższa jest radość z pokonanej trudności, osiągniętego celu, odkrytej tajemnicy. Radość triumfu i szczęście samodzielności, opanowania i władania." 
                </p>
                <h2 className="quote__author">
                    Janusz Korczak
                </h2>
            </div>
        </div>
    )
}

export default HeaderComponents;