import React from 'react';
import logo from '../../Images/Logo.png';
import './Header.css';
import Search from '../Search/Search';
import Call from '../Call/Call';
import Treatmenttypes from '../Treatmenttypes/Treatmenttypes';
import Explore from '../Explore/Explore';
import Popup from 'reactjs-popup';

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

             <Popup trigger={<button className="text-blue-600">Get Medical Advice</button>}>
                <div className="text-blue-600 ">
                    <h2>Get Medical Advice</h2>
                </div>
             </Popup>
             

             
            </div>
        </div>
        <Search/>
        <Call/>
        <Treatmenttypes/>
        <Explore/>
        </div>
    );
};

export default Header;