import React from "react";

const CloseForm  = (props) =>{
    return(
        <>
        <a className="close__form" href="#" onClick={props.close}>X</a>
        </>
   
    )
}

export default CloseForm;