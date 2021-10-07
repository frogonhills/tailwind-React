import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navebar = () => {
    return (
        <nav   className='flex justify-between items-center h-16 bg-white text-black relative shaddow-sm font-mono'   >
            <Link to='/' className='pl-8'>EGG</Link>
            <div className="px-4 cursor-pointer md:hidden " >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>

            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to='/'>home</Link>
                <Link className="p-4" to='/menu'>meenu</Link>
                <Link className="p-4" to='/about'>about</Link>
                <Link className="p-4" to='/contact'>contact</Link>
            </div>
        </nav>
    );
};

export default Navebar
