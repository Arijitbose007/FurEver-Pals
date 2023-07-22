import React, { useState } from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header text-gray-400 bg-header-offwhite body-font flex flex-row items-center justify-center lg:justify-around" id="header">
      <div className="flex flex-row items-center md:flex-row md:items-center p-2" id="logo">
        <span className="mission-1 mission-dark">Saving Lives</span>
        <a className="logo-border" href="index.html">
          <img
            className="rounded-full logo-size"
            src="./Images/logo.jpg"
            alt="logo"
          />
        </a>
        <span className="mission-2 mission-dark">Saving Animals</span>
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="absolute top-4 right-4 sm:inline-flex sm:items-center p-2 lg:hidden focus:outline-none text_4"
        aria-controls="navbar-default"
        aria-expanded="false"
        id="nav-button"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <nav>
        <div className="hidden w-full lg:block z-0" id="navbar">
          <ul className="w-[100vw] h-1/2 top-0 right-0 p-4 text-center space-y-8 lg:space-y-0 lg:space-x-3 lg:static lg:w-auto flex flex-col rounded-lg border border-gray-100 items-center lg:bg-transparent lg:border-0 lg:flex-row justify-center">
            <li>
              <a href="./index.html" className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">Home</a>
            </li>
            <li>
              <a href="#About" className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">About Us</a>
            </li>
            <li>
              <a href="./news.html" className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">Pet News</a>
            </li>
            <li>
              <a href="./blog.html" className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">Blogs</a>
            </li>
            <li>
              <a href="./donate.html" className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">Donate Animals</a>
            </li>
            <li>
              <div
                x-data="{ open: false }"
                onMouseLeave={() => {
                  // Handle the onMouseLeave event here
                  // For example, you can set the 'open' state to false
                  // using the React useState hook or any other state management approach.
                  // This code assumes you are using the useState hook to manage the 'open' state.
                  setOpen(false);
                }}
                className="relative"
              >
                <a
                  onMouseOver={() => {
                    setOpen(true);
                  }}
                  className="p-3 text-custom-heading flex font-bold hover:underline underline-offset-4 turn-red-hover navbar-item"
                >
                  Support Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </a>

                <div
                  x-show="open"
                  className="z-20 absolute -left-1 w-[7.5rem] py-2 bg-gray-100 rounded-md shadow-xl"
                >
                  <a
                    href="volunteer.html"
                    className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white"
                  >
                    Become a Volunteer
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a href="./reportstary.html" className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">SOS Report</a>
            </li>

            <li>
              <a href="#contact">
                <button className="inline-flex items-center bg-header-orange-light border-0 py-4 px-2 focus:outline-none text_4 font-bold rounded text-base mt-4 md:mt-0">
                  Contact Us
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </a>
            </li>
            <li>
              <a id="theme-toggle">
                <img src="./Images/sun.svg" width="50px" id="switch" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
