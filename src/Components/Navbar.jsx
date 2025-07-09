import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div>
                <div className="navbar bg-gradient-to-b from-sky-400 to-blue-700 shadow-lg ">
                    <div className="navbar-start">
                        
                        <Link to={'/'}><h1 className="p-2 text-xl font-bold text-2xl">Qtech</h1></Link>
                    </div>
                    
                    <div className="navbar-end ">
                        <a className="font-semibold  cursor-pointer text-lg ">Login</a>
                    </div>
                </div>
            </div>
         
        </>

    );
};

export default Navbar;