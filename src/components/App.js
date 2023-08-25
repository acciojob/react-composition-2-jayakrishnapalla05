import React, { useState } from 'react';
import Modal from './Modal';

const App=()=> {
  const[element, setelement]=useState("");



  function openModal(){
    if(element===""){
      setelement(<div className='model-overlay'>
      < button className='model-close' onClick={closeModel}>Close Modal</button>
     <p className='model-p'>This is the content of the modal</p>
     </div>);

    }
  }

  function closeModel(){
    setelement('');
  }
  return (
    <div>
      <button onClick={openModal}>Show Modal</button>
      {
        element
      }
    </div>
  )
  
}

export default App;
