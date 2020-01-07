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
                    Donec auctor, lectus non rhoncus cursus, lectus sem pellentesque enim, id fringilla arcu lacus id tortor. Sed gravida interdum dolor vitae interdum. Sed laoreet efficitur est, id rutrum libero facilisis quis. Curabitur at nisl aliquam, elementum augue sit amet, tempus neque. Donec porttitor ornare diam vitae sollicitudin. Phasellus aliquam iaculis risus, sit amet venenatis tellus vestibulum ac. Integer dictum egestas consequat. Pellentesque sagittis dolor sed felis pretium, quis elementum ligula vestibulum. Nunc dignissim pharetra nisi, sed convallis tellus hendrerit a. Cras lorem lectus, luctus ut arcu a, varius consequat velit.

Aliquam interdum malesuada lorem non accumsan. Donec sit amet consectetur erat, sed dictum ex. In hac habitasse platea dictumst. Aenean porttitor eget odio vitae fringilla. Nunc molestie iaculis dolor, id fermentum diam. Cras malesuada ligula tellus, sit amet dictum augue commodo ut. Phasellus id metus nec mi porta imperdiet. Nunc eu commodo risus, sed sollicitudin libero. Quisque iaculis urna vitae elit scelerisque porta in et leo. Maecenas diam turpis, euismod a ligula quis, dapibus ullamcorper quam. Cras malesuada, tellus pretium viverra pharetra, lorem lacus aliquam risus, feugiat ullamcorper odio metus id risus. In eget enim ligula. Nunc non rutrum lorem. Etiam sit amet neque at lectus fringilla placerat non vitae magna. Etiam dapibus vel erat eget facilisis.

Aliquam erat volutpat. Vestibulum vel sagittis nunc. Morbi nibh ipsum, imperdiet eget ornare in, pellentesque a diam. Nam dui magna, malesuada et interdum sed, lobortis in enim. Sed et condimentum leo, nec luctus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc iaculis mi arcu, eu pulvinar diam suscipit at. Donec vitae malesuada urna. Mauris tincidunt elementum enim, sit amet efficitur dolor interdum tincidunt. Suspendisse suscipit, augue quis convallis consequat, ante tortor dictum quam, non viverra felis dolor vel lorem. Sed id ipsum ac dolor egestas pellentesque.

Aliquam malesuada dui nec tincidunt luctus. Nulla id tristique risus. Proin egestas malesuada nibh id rutrum. Vivamus pellentesque facilisis pellentesque. Maecenas bibendum mi lorem, quis mollis magna tempus vitae. Nulla non faucibus felis, eget aliquet felis. Nulla facilisi. Vivamus finibus ultricies ligula vestibulum vestibulum. Quisque volutpat sagittis nisl sit amet aliquet. In velit mi, auctor id dignissim et, mattis ut arcu. Integer arcu orci, vehicula sit amet tincidunt eget, pellentesque vel massa. Vestibulum vel purus odio. Phasellus varius lectus ut leo hendrerit vehicula. Etiam facilisis justo vel tellus rutrum, a facilisis justo ultrices. Nam sit amet eleifend velit.

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