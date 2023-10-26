import MobileNav from './MobileNav'
import logo from '../images/logo.svg'
import menu from '../images/icon-menu.svg'
import arrow_down from '../images/icon-arrow-down.svg'
import arrow_up from '../images/icon-arrow-up.svg'
import planning from '../images/icon-planning.svg'
import reminders from '../images/icon-reminders.svg'
import todo from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'

import { useState } from 'react'

const NavBar = () => {
    const [active, setActive] = useState(false)
    const handlleClick = () => { setActive(prev => !prev) }

    return (
        <nav className='flex items-center justify-between p-5 mb-5 md:px-20'>
            {active && <MobileNav setActive={setActive}/>}
            <img src={logo} alt="logo" width={84} height={27} className='cursor-pointer mr-8' />

            <div className='w-full flex justify-between items-center flex-1 px-5 py-1'>
                <ul className='hidden md:flex gap-8 font-medium'>

                    <li className='group relative transform transition-transform duration-300 ease-in-out '><a href="/"
                        className='text-gray-400 flex items-center justify-between w-[90px]'
                    >Features
                        <img src={arrow_down} alt="arrow" className='hover:rotate-180 group-hover:hidden' />
                        <img src={arrow_up} alt="up" className='hidden group-hover:block' />
                    </a>
                        <div className='hidden group-hover:block w-[130px] absolute -bottom-18 left-0 right-0 px-2 py-2 bg-white z-30 border'>
                            <ul className='flex flex-col gap-3'>
                                <li className='nav-elem'><img src={todo} alt="todo" /> <p>Todo List</p> </li>
                                <li className='nav-elem'><img src={calendar} alt="calendar" /><p>Calendar</p></li>
                                <li className='nav-elem'><img src={reminders} alt="reminders" /><p>Reminders</p></li>
                                <li className='nav-elem'><img src={planning} alt="planning" /><p>Planning</p></li>
                            </ul>
                        </div>
                    </li>

                    <li className='group relative transform transition-transform duration-300 ease-in-out '><a href="/"
                        className='text-gray-400 flex items-center justify-between w-[90px]'
                    >Company
                        <img src={arrow_down} alt="arrow" className='hover:rotate-180 group-hover:hidden' />
                        <img src={arrow_up} alt="up" className='hidden group-hover:block' />
                    </a>
                        <div className='hidden group-hover:block w-[100px] absolute -bottom-18 left-0 right-0 px-2 py-2 bg-white z-30 border'>
                            <ul className='flex flex-col gap-3'>
                                <li className='nav-elem'>History</li>
                                <li className='nav-elem'>Our Team</li>
                                <li className='nav-elem'>Blog</li>
                            </ul>
                        </div>
                    </li>

                    <li><a href="/" className='text-gray-400'>Careers</a></li>
                    <li><a href="/" className='text-gray-400'>About</a></li>
                </ul>
                <div className="hidden md:flex w-[190px] gap-6">
                    <button>Login</button>
                    <button className='border border-black px-4 rounded'>Register</button>
                </div>
            </div>

            <img src={menu} alt="menu" width={32} height={18} className='cursor-pointer block md:hidden' onClick={handlleClick} />
        </nav>
    )
}

export default NavBar