import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
      <header className=" flex justify-between items-center px-10 w-full h-[70px] bg-blue-600 font-bold text-xl">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-300 ml-5 "
                : " text-white ml-5 "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-300 ml-5 "
                : " text-white ml-5 "
            }
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-orange-300 ml-5 "
                : " text-white ml-5 "
            }
          >
            Login
          </NavLink>
        </div>
      </header>
    );
};

export default Header;