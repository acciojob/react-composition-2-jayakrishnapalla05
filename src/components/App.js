
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {

  const [show,setShow] = useState(false);

  const onClose=()=>{
    setShow(false)
  }

  console.log(document);

  document.body.addEventListener('click', ()=>{
    onClose();
  })

  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={()=>setShow(true)}>Show Modal</button>
        <Modal show={show} onClose={onClose}/>
    </div>
  )
}

export default App
