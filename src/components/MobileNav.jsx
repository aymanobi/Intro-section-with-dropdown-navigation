import close from '../images/icon-close-menu.svg'
import arrow_down from '../images/icon-arrow-down.svg'
import arrow_up from '../images/icon-arrow-up.svg'
import planning from '../images/icon-planning.svg'
import reminders from '../images/icon-reminders.svg'
import todo from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'
import { useState } from 'react'

const MobileNav = ({ setActive }) => {

    const [clicked, setClicked] = useState(false)
    const [compny, setCompny] = useState(false)


    const handlleClick = () => { setActive(false) }

    return (
        <div className="absolute right-0 top-0 bottom-0 w-[300px] h-screen bg-white p-10 md:hidden">
            <img src={close} alt="menu" width={32} height={18} className='cursor-pointer ml-auto' onClick={handlleClick} />
            <div className='w-full flex justify-between items-start flex-col px-5 py-1 my-6'>
                <ul className='flex flex-col gap-8 font-medium'>

                    <li className='group relative transform transition-transform duration-300 ease-in-out ' onClick={() => setClicked(!clicked)}>
                        <p
                            className='text-gray-500 flex items-center justify-between w-[90px]'>Features
                            <img src={arrow_down} alt="arrow" className={`${clicked ? "hidden" : "block"}`} />
                            <img src={arrow_up} alt="up" className={`${clicked ? "block" : "hidden"}`} />
                        </p>
                        <div className={`${clicked ? "block" : "hidden"} w-[130px] ml-[30px] my-2 bg-white z-30`}>
                            <ul className='flex flex-col gap-3'>
                                <li className='nav-elem'><img src={todo} alt="todo" /> <p>Todo List</p> </li>
                                <li className='nav-elem'><img src={calendar} alt="calendar" /><p>Calendar</p></li>
                                <li className='nav-elem'><img src={reminders} alt="reminders" /><p>Reminders</p></li>
                                <li className='nav-elem'><img src={planning} alt="planning" /><p>Planning</p></li>
                            </ul>
                        </div>
                    </li>

                    <li className='group relative transform transition-transform duration-300 ease-in-out '>
                        <p
                            className='text-gray-500 flex items-center justify-between w-[90px]' onClick={() => setCompny(!compny)}
                        >Company
                            <img src={arrow_down} alt="arrow" className={`${compny ? "hidden" : "block"}`} />
                            <img src={arrow_up} alt="up" className={`${compny ? "block" : "hidden"}`} />
                        </p>
                        <div className={`${compny ? "block" : "hidden"} w-[130px] ml-[30px] my-2 bg-white z-30`}>
                            <ul className='flex flex-col gap-3'>
                                <li className='nav-elem'>History</li>
                                <li className='nav-elem'>Our Team</li>
                                <li className='nav-elem'>Blog</li>
                            </ul>
                        </div>
                    </li>

                    <li><a href="/" className='text-gray-500'>Careers</a></li>
                    <li><a href="/" className='text-gray-500'>About</a></li>
                </ul>
                <div className="flex flex-col w-full gap-6 mt-6">
                    <button>Login</button>
                    <button className='border border-black px-4 rounded'>Register</button>
                </div>
            </div>
        </div>

    )
}

export default MobileNav