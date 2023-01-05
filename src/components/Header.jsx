import React from 'react'
import img_logo from "../../public/img/shokworks_logo_light.jpg"
import {
  RiNotification2Line,
  RiArrowDownSLine,
  RiSettings4Line,
  RiDoorOpenLine
 } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-x-2'>
        <button className='relative hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
          <RiNotification2Line/>
          <span className='absolute -top-1 right-0.5 bg-primary py-0.5 px-[5px] text-black rounded-full text-[8px] 
                            box-content font-bold'> 2
          </span>
        </button>
        <Menu menuButton={<MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors'>
                              <img src={img_logo} className="w-6 h-6 object-cover rounded-full"/>
                              <span>Shokworks INC</span>
                              <RiArrowDownSLine/>
                          </MenuButton>}align="end"
                                        arrowClassName="bg-secondary-100"
                                        transition
                                        menuClassName="bg-secondary-100 p-4">       
            <MenuItem className="p-0 hover:bg-transparent">
              <Link to="/perfil" 
                    className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6'>
                <img src={img_logo} className="w-8 h-8 object-cover rounded-full"/>
                <div className='flex flex-col text-sm'>
                  <span className='text-sm'>Shokworks INC</span>
                  <span className='text-xs text-gray-500'>shokworks.io</span>
                </div>
              </Link>
            </MenuItem>
            <hr className='my-4 border-gray-500'/>
            <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900">
              <Link to="/configuracion" className='flex items-center gap-x-4'>
                <RiSettings4Line/>Settings
              </Link>
            </MenuItem>
            <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900">
              <Link to="/configuracion" className='flex items-center gap-x-4'>
                <RiDoorOpenLine/>Exit
              </Link>
            </MenuItem>
        </Menu>
      </nav>
    </header>
  )
}

export default Header