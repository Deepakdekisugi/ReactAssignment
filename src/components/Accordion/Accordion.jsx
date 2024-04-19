import React from 'react';
import civilData from '../data';

import "./Accordion.css"
import MyAccordion from '../MyAccordion/MyAccordion';
function Accordion({firstCheck}) {
  // Extracting the keys from civilData
 
  return (
    <div className='civil-container'>
      {
        civilData.map((ele)=>{
          return(
            <MyAccordion key={ele.id*2.78} ele={ele} firstCheck={firstCheck}/>

          )
        })
      }
    </div>
  );
}

export default Accordion;
