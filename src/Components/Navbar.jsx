import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
//import UseAuth from "./Hook/UseAuth";

const Navbar = () => {

    const { logout, user } = UseAuth();

    return (
        <div className="navbar bg-base-300 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" style={{ zIndex: 10 }}>

                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2' : 'font-bold p-2 sm:mr-2'} to="/"><a>Home</a></NavLink>


                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/allart"><a>All Art & craft Items</a></NavLink>


                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/addcraft"><a>Add Craft Item</a></NavLink>



                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/myart"><a>My Art&Craft List</a></NavLink>




                    </ul>
                </div>
                <NavLink to="/">
                    <a className="btn btn-ghost text-xl md:text-3xl
                     font-bold text-blue-500 hover:text-blue-700">Ceramics Arena</a>
                </NavLink>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1" style={{ zIndex: 10 }}>

                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 p-2 sm:mr-2 rounded'} to="/"><a>Home</a></NavLink>


                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/allart"><a>All Art & craft Items</a></NavLink>


                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/addcraft"><a>Add Craft Item</a></NavLink>


                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/myart"><a>My Art&Craft List</a></NavLink>




                </ul>
            </div>
            <div className="navbar-end gap-1 text-center" style={{ zIndex: 10 }}>
               
                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                            title={user?.displayName}>
                            <div className="w-10 rounded-full" >
                                <img
                                    src={user?.photoURL ||
                                        "https://i.ibb.co/sjymvr8/Capture4.png"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3
                        z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm btn-ghost bg-cyan-200">
                                    {user ? user.displayName : 'User name not found'}
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={logout}
                                    className="btn btn-sm btn-ghost bg-cyan-200 mt-2">Logout</button>
                            </li>
                        </ul>
                    </div>
                        :
                        <Link to="/login">
                            <button className="btn text-white bg-black">Login</button>
                        </Link>
                }
                {
                    user ? <button
                        onClick={logout}
                        className="btn btn-medium btn-ghost bg-black text-white mt-2">Logout</button>
                        : <a></a>
                }



            </div>

        </div>
    );
};

export default Navbar;