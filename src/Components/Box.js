import React from "react";
const Box  = (props) =>{
    console.log(props.result)
    const box = props.result.map(card => (
        <a className="calendar" key={card.id} href="#" onClick={() =>props.openFrom(card)} >
            <div className="frame">
            <div className="left screw">
                <div className="line"></div>
                <div className="shine"></div>
            </div> 
            <div className="right screw">
                <div className="rerotate line"></div>
                <div className="shine"></div>
            </div>
            <div className="year">
                <h1 className="yearCaption">{card.year}</h1>
            </div>
            </div>
            <div className="content">
            <h2 className="monthCaption">{card.month}</h2>
            <h1 className="dayCaption">{card.day}</h1>
            </div>
            
            <div className="over"></div>
        </a>
    ));
    return(
        <>
            {box}
        </>
    )
}

export default Box;