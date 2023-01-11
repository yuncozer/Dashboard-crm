import React from 'react'
import { Link, useLocation } from 'react-router-dom';
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


const Header = () => {
  
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  
  return (
    <header className='h-[7vh] md:h-[10vh] border-b border-secondary-100 p-6 grid grid-cols-2 items-center'>
      <div className='justify-self-start'>
      <Link to={`/${layout}`} className='capitalize text-gray-500 hover:text-primary transition-colors'>{layout} </Link>/
      <Link to={`/dashboard/${page}`} className='capitalize font-bold text-xl hover:text-primary transition-colors'> {page}</Link>
      </div>
      <nav className='flex items-center gap-x-2 justify-end'>
        <button className='relative hover:bg-primary/30 p-2 rounded-lg transition-colors'>
          <RiNotification2Line/>
          <span className='absolute -top-1 right-0.5 bg-primary py-0.5 px-[5px] text-black rounded-full text-[8px] 
                            box-content font-bold'> 2
          </span>
        </button>
        <Menu menuButton={<MenuButton className='flex items-center gap-x-2 hover:bg-primary/30 py-2 px-4 rounded-lg transition-colors'>
                              <img src={img_logo} className="w-6 h-6 object-cover rounded-full"/>
                              <span>Shokworks INC</span>
                              <RiArrowDownSLine/>
                          </MenuButton>}align="end"
                                        arrowClassName="bg-secondary-100"
                                        transition
                                        menuClassName="bg-secondary-100 p-4">       
            <MenuItem className="p-0 hover:bg-transparent">
              <Link to="/perfil" 
                    className='rounded-lg transition-colors text-gray-300 hover:bg-primary/30 flex items-center gap-x-4 py-2 px-6'>
                <img src={img_logo} className="w-8 h-8 object-cover rounded-full"/>
                <div className='flex flex-col text-sm'>
                  <span className='text-sm'>Shokworks INC</span>
                  <span className='text-xs text-gray-500'>shokworks.io</span>
                </div>
              </Link>
            </MenuItem>
            <hr className='my-4 border-gray-500'/>
            <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-primary/30">
              <Link to="/configuracion" className='flex items-center gap-x-4'>
                <RiSettings4Line/>Settings
              </Link>
            </MenuItem>
            <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-primary/30">
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