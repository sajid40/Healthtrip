import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Active = ({address,name}) => {
    return (
        <div>
                 <NavLink className={({ isActive }) =>
              isActive ? "underline underline-offset-8  decoration-blue-600" : ""
            } to={address}>{name}</NavLink>  
            </div>
    );
};

export default Active;