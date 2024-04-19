import React, { useEffect, useState } from "react";

import MySecAccordion from "../MySecAccordion/MySecAccordion";
import "./MyAccordion.css";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

function MyAccordion({ ele ,firstCheck,setFirstCheck }) {
  const [expanded, setExpanded] = useState(true);
  const [secondCheck,setSecondCheck]= useState(false);

  const handleChange = ()=>{
    setSecondCheck(prev => !prev);
  }
  useEffect(() => {
    // When firstCheck changes, update secondCheck based on its value
    setSecondCheck(firstCheck);
}, [firstCheck, setSecondCheck]);

  return (
    <>
      <div className="civil-container">
        <div className="temp-container">
          <div className="civil-container-left">
            {/* Conditionally render the appropriate icon */}
            {expanded ? (
              <RemoveOutlinedIcon
                className="drop-icon"
                onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
              />
            ) : (
              <AddOutlinedIcon
                className="drop-icon"
                onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
              />
            )}
           
            <input className="check-box" type="checkbox" checked={firstCheck || secondCheck} onChange={handleChange}/>
            <p>{ele.name}</p>
          </div>
          <div className="civil-container-right">
            <div className="Rate box">{ele.rate}</div>
            <div className="Total box">₹{ele.total}</div>
          </div>
        </div>
      </div>

      {/* Render activities based on the `expanded` state */}
      {expanded && ele.activity.map((item, index) => (
        <div key={index} className="activity-box">
          <MySecAccordion item={item} index={index} firstCheck={firstCheck} secondCheck={secondCheck} />
        </div>
      ))}
    </>
  );
}

export default MyAccordion;