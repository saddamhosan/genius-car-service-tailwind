import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';

const Header = () => {
   const [user] = useAuthState(auth);
    return (
      <header className=" flex justify-between items-center px-10 w-full h-[70px] bg-blue-600 font-bold text-xl">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-300 ml-5 " : " text-white ml-5 "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-300 ml-5 " : " text-white ml-5 "
            }
          >
            About
          </NavLink>
          {user?.uid ? (
            <button className="text-white ml-5" onClick={() => signOut(auth)}>
              Log Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-orange-300 ml-5 " : " text-white ml-5 "
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </header>
    );
};

export default Header;