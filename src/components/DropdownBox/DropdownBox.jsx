import React, { useContext } from 'react';
import "./DropdownBox.css";
import Accordion from '../Accordion/Accordion';


import { useState } from 'react';

function DropdownBox() {
  // Access context

  const [firstCheck,setFirstCheck]= useState(false);
 

  // Function to toggle the packageCheck state
  const togglePackageCheck = () => {
      setFirstCheck(!firstCheck);
  };

  return (
    <div className="main">
      <div className="table-heading">

        <div className="package-box">
           <input className='check-box' type="checkBox" onChange={togglePackageCheck} />
           <p>Package</p>
        </div>

        <div className="table-heading-right">
          <div className="Rate box">Rate (in sqft)</div>
          <div class="Total box">Total</div>
        </div>
      </div>

      
      <Accordion firstCheck={firstCheck} />
    </div>
  );
}

export default DropdownBox;
