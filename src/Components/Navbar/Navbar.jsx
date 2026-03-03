import React from 'react';

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm lg:px-20">
                <div className="navbar-start">

                    <a className="text-xl lg:text-2xl font-bold">CS — Ticket System </a>
                </div>

                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>Home</a></li>
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>FAQ</a></li>
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>Changelog</a></li>
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>Blog</a></li>
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>Download</a></li>
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>Contact</a></li>
                    </ul>
                </div>

                <div className="navbar-end">

                    <button className='btn bg-[#422AD5]  text-white rounded-lg '><i class="fa-jelly fa-regular fa-plus"></i> New Ticket</button>
                </div>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-48 p-2 right-2 shadow">
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>Home</a></li>
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>FAQ</a></li>
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>Changelog</a></li>
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>Blog</a></li>
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>Download</a></li>
                        <li class="text-xl  hover:text-[#422AD5] font-semibold"><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;