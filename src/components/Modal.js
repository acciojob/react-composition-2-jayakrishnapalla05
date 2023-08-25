import React, { useState } from "react";

const Modal =({show,onClose})=>{

    return(
        <>
            { 
            show && 
            <div className="model model-overlay">
                <button className="model-close" onClick={()=>onClose()}>Close</button>
                <p className="model-p">This is the content of the modal.</p>
            </div>
        }
        </>
    )
}

export default Modal