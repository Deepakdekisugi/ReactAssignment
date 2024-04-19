import React from 'react'
import "./Header.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import FormComponent from '../form/form';

function Header() {
    const [open, setOpen] = useState(false);
   const handleFormButton =()=>{
        setOpen(!open);
    }
    return (
        <>
        
        <div className="header">
           
            <div className="header-left">
                <div className="header-left-icon">
                <ArrowBackIosIcon className='icon'></ArrowBackIosIcon>

                </div>
                <div className="header-left-content">

                Create Workorder
                </div>
            </div>

            <div className="header-right">
                <button className="save-button" onClick={handleFormButton}>
                    Save
                </button>
            </div>
        </div>
        {
            open &&
            <FormComponent open={open}/>
        }
        </>
    );
}


export default Header