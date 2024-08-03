import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { FaBars } from 'react-icons/fa'


const Menu = [
    {   id: 1,
        name: 'Noodle Soup',
        link: '#'
    },
    {id: 2,
        name: 'Rice Bowls',
        link: '/#'
    },
    {  id: 3,
        name: 'Salad Bowls',
        link: '#'
    },
    {   id: 4,
        name: 'Beverages',
        link: '#'
    },
    {   id: 5,
        name: 'Kids',
        link: '#'
    }
]

const Navbar = () => {
    const [open,setOpen]=useState(false);
    const handleOpen = () => {
        setOpen(!open)
    }
  return (
    <div className='bg-lightBlue'>
        <div className='container py-2'>
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div data-aos='fade-down' data-aos-once="true">
                    <a href="#">
                        <img src={Logo} className='w-36' alt="" />
                    </a>
                </div>
                {/* LInk section  */}
                <div  data-aos='fade-down' data-aos-once="true" data-aos-delay="300"
                 className=' hidden lg:flex justify-between item-center gap-4'>
                    <ul className='hidden lg:flex justify-between items-center gap-4'>
                        {
                            Menu.map((menu,index) => (
                                <li key={menu.id}>
                                    <a href={menu.link}
                                       className='inline-block text-xl py-4 p-4'>{menu.name}</a>
                                    </li>
                                     ) 
                                )
                        }
                    </ul>
                </div>


               {/* Responsive  Mobile Menu */}
               <div className='lg:hidden'>
                <button  onClick={handleOpen}>
                    <FaBars className='text-3xl'/>
                </button>
                {/* Drop down menu */}
                {
                    open && (
                        <div className=''>
                            <ul className='bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50'>
                                {
                                    Menu.map((menu,index) => (
                                        <li key={menu.id}>
                                            <a href={menu.link}
                                               className='inline-block text-xl py-4 p-4 hover:bg-primary 
                                               hover:text-white w-full rounded-md'>{menu.name}</a>
                                            </li>
                                             ) 
                                        )
                                }
                            </ul>
                        </div>
                    )
                }
               </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar