import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdExpandMore, MdExpandLess } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";

const Breadcrums = () => {
  const [isOpen, setIsOpen] = useState(false);

  const breadcrumbs = [
    { name: 'LeaderBoard' },
    { name: 'Historical Trading' },
    { name: 'Historical Chart' },
    { name: 'Scanners' },
    { name: 'Alerts' },
    { name: 'Basic Backtest' },
    { name: 'Advanced Backtest' },
    { name: 'Pricing' },
    { name: 'My Earnings' },
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-3 rounded">
      <button 
        className="sm:hidden flex items-center  flex-row-reverse w-full p-2 rounded" 
        onClick={toggleOpen}
      >
        <div className="flex items-center">
          {isOpen ? <MdExpandLess /> : <MdExpandMore />}
          <RxHamburgerMenu className="ml-2"/>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ol
            className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 space-x-0 sm:space-x-2 mt-2 sm:mt-0"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                <span className={`text-sm sm:text-base hover:text-blue-800 cursor-pointer ${breadcrumb.name === 'LeaderBoard' ? 'bg-black text-white rounded-lg p-1' : ''}`}>
                  {breadcrumb.name}
                </span>
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-1 sm:mx-2 text-gray-500"><MdKeyboardArrowRight /></span>
                )}
              </li>
            ))}
          </motion.ol>
        )}
      </AnimatePresence>
      <div className="hidden sm:flex flex-wrap space-x-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            <span className={`text-sm sm:text-base hover:text-blue-800 cursor-pointer ${breadcrumb.name === 'LeaderBoard' ? 'bg-black text-white p-2 rounded-2xl' : ''}`}>
              {breadcrumb.name}
            </span>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-1 sm:mx-2 text-gray-500"><MdKeyboardArrowRight /></span>
            )}
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrums;
