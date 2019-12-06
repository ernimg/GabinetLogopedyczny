import React from 'react';
import {FaUser,FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
const About = () =>{

    return(
        <>
        <div className="about-wrapper">
            <div className="about__header">
                <div className="about__header-icon">
                    <FaUser/>
                </div>
            </div>
            <div className="about__body">
                <div className="about__body-paragraf">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad totam ipsum facere deserunt asperiores excepturi voluptas officiis ullam esse aliquam, earum autem rem, eligendi maiores cumque cum laudantium et architecto.
                    </p>
                </div>
                <div className="about__body-aside">
                    <div className="social">
                        <a href="#"><FaFacebookF/></a>
                        <a href="#"><FaLinkedinIn/></a>
                    </div>
                    <div className="experience">
                        Nie wiem co dać
                    </div>
                    <div className="skils">
                        nie wiem co dać
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;