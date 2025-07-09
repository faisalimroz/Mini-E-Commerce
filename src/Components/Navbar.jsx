import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div>
                <div className="navbar bg-gradient-to-b from-sky-400 to-blue-700 shadow-lg ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-blue-00 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li className='font-semibold'><a href='/'>Home</a></li>
                                {/* <li className='font-semibold'><a href='/allproducts'>Products</a></li> */}

                             
                            </ul>
                        </div>
                        <Link to={'/'}><h1 className="p-2 text-xl font-bold text-2xl">Qtech</h1></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-5  px-1">
                            <li className='font-semibold'><a href='/'>Home</a></li>
                            {/* <li className='font-semibold'><a href='/allproducts'> Products</a></li> */}

                        </ul>
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