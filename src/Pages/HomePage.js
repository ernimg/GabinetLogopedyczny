import React from 'react';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import  {faCalendarAlt, faFileDownload, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Style/HomPage.css';
library.add(faCalendarAlt,faFileDownload,faCommentAlt)

const card = [

    {
        name: "Kalendarz",
        path: "/speetch-terapy",
        img: ['fas', 'calendar-alt']
        
    },
    {
        name: "Materiały",
        path: "/materials",
        img: ['fas', 'file-download']
    },
    {
        name: "Blog",
        path: "/blog",
        img: ['fas', 'comment-alt']
    }

]



const HomePage = () =>{
    const boxes = card.map(box =>(
            <Link  to={box.path} key={box.name} className="card">
                <div className="card__face card__face--1">
                    <div className="card__face1-content">
                    <FontAwesomeIcon icon={box.img} />
                    </div>
                </div>
                <div className="card__face card__face--2">
                    <h2 className="card__face2-content">
                    {box.name}
                    </h2>
                </div>
            </Link>
    ))
    return(
        <div className="page__content-home" >
             <div className="page__content-container">
                {boxes}
            </div>
        </div>
    )
}
export default HomePage;