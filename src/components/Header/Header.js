import React from 'react';
import logo from '../../Images/Logo.png';
import './Header.css';
import Search from '../Search/Search';
import Call from '../Call/Call';
import Treatmenttypes from '../Treatmenttypes/Treatmenttypes';

const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-around w-4/5 mx-auto">
            <div  >
                <img className="w-3/4 mr-5" src={logo} alt="" />
            </div>

            <div  className="">
            <a href="">Online Consultaion</a>
             <a href="">Treatments</a>
             <a href="">Testimonials</a>
             <a href="">Blogs</a>

             
            <a href="">Language</a>
             <span>|</span>
             <a className="text-blue-500" href="">Login</a>
             

             <a className="p-2 bg-blue-500 rounded-2xl text-white" href="">Get Medical Advice</a>
            </div>
        </div>
        <Search/>
        <Call/>
        <Treatmenttypes/>
        </div>
    );
};

export default Header;