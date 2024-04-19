import React, { useState } from 'react';
import "./DropdownBox.css";
import Accordion from '../Accordion/Accordion';

function DropdownBox() {
  const [firstCheck, setFirstCheck] = useState(false);

  const togglePackageCheck = () => {
    setFirstCheck(!firstCheck);
  };

  return (
    <div className="main">
      <div className="table-heading">
        <div className="package-box">
          {/* Adjust the type attribute to "checkbox" */}
          <input
            className="check-box"
            type="checkbox"  // Correct the typo in type attribute
            checked={firstCheck}  // Make sure the checkbox is controlled
            onChange={togglePackageCheck}
          />
          <p>Package</p>
        </div>

        <div className="table-heading-right">
          <div className="Rate box">Rate (in sqft)</div>
          <div className="Total box">Total</div>
        </div>
      </div>

      <Accordion firstCheck={firstCheck} />
    </div>
  );
}

export default DropdownBox;
