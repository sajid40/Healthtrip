import React from 'react';
import {  NavLink } from 'react-router-dom';

const Active = ({address,name}) => {
    return (
        <div>
                 <NavLink className={ ({ isActive }) =>
              isActive ? "underline underline-offset-8  decoration-blue-600 mx-5" : "mx-5"
            } to={address}>{name}</NavLink>  
            
            </div>
    );
};

export default Active;