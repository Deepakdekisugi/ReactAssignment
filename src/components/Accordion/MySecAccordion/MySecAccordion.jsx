import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./MySecAccordion.css";

function MySecAccordion({ item, index, firstCheck, secondCheck }) {
  const [show, setShow] = useState(false);
  const [thirdCheck, setThirdCheck] = useState(false);
  // Initialize an array of states for each fourth checkbox
  const [fourthCheckArray, setFourthCheckArray] = useState(
    new Array(item.length).fill(false)
  );

  // Function to handle thirdCheck state
  const handleThird = () => {
    setThirdCheck((prev) => !prev);
  };

  // Function to handle fourthCheck state for a specific checkbox
  const handleFourth = (idx) => {
    setFourthCheckArray((prevArray) => {

      const newArray = [...prevArray];
      newArray[idx] = !prevArray[idx];
      return newArray;
    });
  };

  // Update thirdCheck based on firstCheck and secondCheck
  useEffect(() => {
    setThirdCheck(firstCheck || secondCheck);
  }, [firstCheck, secondCheck]);

  // Update each fourth checkbox state based on thirdCheck
  useEffect(() => {
    setFourthCheckArray((prevArray) => prevArray.map(() => thirdCheck));
  }, [thirdCheck]);

  return (
    <>
      <div className="activity-container">
        {show ? (
          <ExpandLessIcon
            className="toggle-icon"
            onClick={() => setShow((prevShow) => !prevShow)}
          />
        ) : (
          <ExpandMoreIcon
            className="toggle-icon"
            onClick={() => setShow((prevShow) => !prevShow)}
          />
        )}
        <input
        className="check-box activity-check-box"
          type="checkbox"
          checked={firstCheck || secondCheck || thirdCheck}
          onChange={handleThird}
        />
        <p>Activity {index+1}</p>
      </div>
      <div className="work-container">
        {show &&
          item.map((ele, idx) => (
            <div key={idx} className="work-box">
              <input
                type="checkbox"
                className="check-box work-check-box"
                checked={firstCheck || secondCheck || thirdCheck || fourthCheckArray[idx]}
               
                onChange={() => handleFourth(idx)} 
              />
              <p>{ele}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default MySecAccordion;
