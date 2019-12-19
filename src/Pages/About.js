import React from 'react';
import {FaUser,FaFacebookF,FaLinkedinIn,FaMusic,FaFilm,FaSwimmer,FaBook, FaAngleRight} from 'react-icons/fa';
import '../Style/About.css';
const About = () =>{

    return(
        <>
        <div className="about-wrapper">
            <div className="about__header">
                <div className="about__header-icon">
                    <FaUser className="about__header-icon-item"/>
                </div>
                <h1 className="about__header-username">Imie Nazwisko</h1>
            </div>
            <div className="about__body">
                <div className="about__body-paragraf">
                    <p className="about__body-paragraf-p">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad totam ipsum facere deserunt asperiores excepturi voluptas officiis ullam esse aliquam, earum autem rem, eligendi maiores cumque cum laudantium et architecto.
                    </p>
                </div>
                <div className="about__body-aside">
                    <div className="social">
                        <a href="#"><FaFacebookF/></a>
                        <a href="#"><FaLinkedinIn/></a>
                    </div>
                    <div className="interests">
                       <h2 className="interests-header" >
                           Zainteresowania
                       </h2>
                       <div className="interests-icosns">
                           <div className="interests-icosns__items">
                            <FaMusic className="music"/><span>Muzyka</span>
                           </div>
                           <div lassName="interests-icosns__items">
                            <FaFilm className="film"/><span>Film</span>
                           </div>
                           <div lassName="interests-icosns__items">
                            <FaSwimmer  className="swiming"/><span>Pływanie</span>
                           </div>
                           <div lassName="interests-icosns__items">
                            <FaBook className="book"/><span>Dobra książka</span>
                           </div>
                       </div>
                    </div>
                    <div className="skils">
                        <h2 className="skils-header" >
                            Doświadczenie
                        </h2>
                        <div className="skils-box">
                            <div>
                                <div lassName="">
                                    <FaAngleRight className="arr"/><span>Kurs pierszej pomocy przedmedycznej</span>
                                </div>  
                            </div>
                            <div lassName="">
                                <FaAngleRight className="arr"/><span>Studia podyplomowe w zakresie przygotowania pedagogicznego</span> 
                            </div>
                            <div lassName="">
                                <FaAngleRight className="arr"/><span> Kwalifikacyjny kurs pedagogiczny dla nauczycieli praktycznej nauki zawodu </span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;