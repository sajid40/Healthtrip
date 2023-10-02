import React from 'react';
import logo from '../../Images/Logo.png'

const Header = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div  >
            <a href="">Online Consultaion</a>
             <a href="">Treatments</a>
             <a href="">Testimonials</a>
             <a href="">Blogs</a>

             <div>
            <a href="">Language</a>
             <span>|</span>
             <a href="">Login</a>
             </div>

             <a href="">Get Medical Advice</a>
            </div>
        </div>
    );
};

export default Header;