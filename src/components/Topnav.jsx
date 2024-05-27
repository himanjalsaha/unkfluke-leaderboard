import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { RiCoinsLine } from "react-icons/ri";

const Topnav = () => {
  return (
    <div>
      <div className="flex items-center  justify-between">
        <div>
          <img
            src="https://www.unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png"
            alt="Unfluke Logo"
            className="w-40 h-auto md:w-60 lg:w-60"
          />
        </div>

        <div className='flex gap-6 px-7'>
          <div className="relative">
            <FaRegBell className='w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8' />
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <RiCoinsLine className='w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8' />
          <img
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            alt="User Avatar"
            className='w-6 h-6 rounded-full md:w-8 md:h-8 lg:w-8 lg:h-8'
          />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Topnav
