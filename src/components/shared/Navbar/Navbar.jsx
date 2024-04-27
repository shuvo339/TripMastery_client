import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../../hooks/UseAuth";

const Navbar = () => {
    const navLinks = <>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg md:text-white border border-green-600 font-semibold bg-black bg-opacity-20 ':'border border-[#1e81b0] md:text-white px-3 py-2 rounded-xl bg-black bg-opacity-10'} to="/">Home</NavLink></li>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg md:text-white border border-green-600  font-semibold bg-black bg-opacity-20 ':'border border-[#1e81b0] md:text-white px-3 py-2 rounded-xl bg-black bg-opacity-10'} to="/allspots">All Tourists Spot</NavLink></li>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg md:text-white border border-green-600 font-semibold bg-black bg-opacity-20 ':'border border-[#1e81b0] md:text-white px-3 py-2 rounded-xl bg-black bg-opacity-10'} to="/addspot">Add Tourists Spot</NavLink></li>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg md:text-white border border-green-600  font-semibold bg-black bg-opacity-20 ':'border border-[#1e81b0] md:text-white px-3 py-2 rounded-xl bg-black bg-opacity-10'} to="/mylist">My List</NavLink></li>
    </>
  const {logOut, user} = UseAuth();
  const handleLogout=()=>{ 
    logOut()
      .then()
      .catch()
  }

  return (
    <div className="navbar bg-[#044553] px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-1 z-10 p-2 shadow-lg bg-transparent rounded-box w-40 gap-1"
          >
             {navLinks}
          </ul>
        </div>
        <Link to="/"><h2 className="text-2xl text-white font-bold">TripMastery</h2></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
        {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
         {
          user? <div className="flex gap-3"> 
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img title={`${user?.displayName}`} alt="Tailwind CSS Navbar component" src={user?.photoURL || 'https://i.ibb.co/2ZQcYZy/user.jpg'} />
              </div>
        </div>
              <button onClick={handleLogout} className="btn bg-[#7E5E60] text-white">Logout</button>
          </div>:<Link to='/login'><button className="btn bg-[#7E5E60] text-white"> Login</button></Link>
        }
        </div>
      </div>
  );
};

export default Navbar;


//#1e81b0
//#154c79
//#063970
//044553