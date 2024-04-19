import React, { useState } from 'react';
import './Options.css'; 

function Options() {
    
    const [activeOption, setActiveOption] = useState('option-1');

    const handleOptionClick = (option) => {
        setActiveOption(option);
        if (option === 'option-2') {
            console.log('Hello World'); // Print Hello World when option-2 is clicked
        }
    };

    return (
        <div className="options">
          
            <div
                className={`option-1 ${activeOption === 'option-1' ? 'active' : ''}`}
                onClick={() => handleOptionClick('option-1')}
            >
                Overview
            </div>

           
            <div
                className={`option-2 ${activeOption === 'option-2' ? 'active' : ''}`}
                onClick={() => handleOptionClick('option-2')}
            >
                Other
            </div>
        </div>
    );
}

export default Options;
