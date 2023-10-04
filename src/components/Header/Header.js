import logo from '../../Images/Logo.png';
import './Header.css';

import Popup from 'reactjs-popup';

const Header = () => {


    return (
        <div className="">
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


            </div>
        </div>
        
        
        </div>
    );
};

export default Header;