import { Link } from 'react-router-dom';
import logo from '../../../Images/Logo.png';


const Header = () => {


    return (
        <div className="border-b shadow-lg sticky ">
            <div className="flex items-center justify-between w-4/5 mx-auto">
            <div  >
                <Link to='/'><img className="w-3/5 " src={logo} alt="" />
</Link>
            </div>

            <div  >
            <Link className="mr-5" to='/onlineconsultaion'>Online Consultaion</Link>
            <Link className="mr-5" to='/treatments'>Treatments</Link>
            <Link className="mr-5" to='/testimonials'>Testimonials</Link>
            <Link className="mr-5" to='/blogs'>Blogs</Link>

            <a className="ml-10" href="">Language</a>
             <span> | </span>
             <a className="text-blue-500" href="">Login</a>


            </div>
        </div>
        
        
        </div>
    );
};

export default Header;