import { useRef } from 'react'
import './Header.css'
import hamburger from '../../images/icon-close-menu.svg'
import logo from '../../images/logo.svg'
import menu from '../../images/icon-menu.svg'




const Header = () => {

  const btnNav = useRef()
  const btnClose = useRef()

  function showMenu() {
    btnNav.current.className = "NavMobile"
    btnClose.current.className = "closing"
  }
  function closeMenu() {
    btnNav.current.className = "hide"
    btnClose.current.className = "hide"
  }
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="head" ref={btnNav}>
        <button className="closing" onClick={closeMenu} ref={btnClose}><img src={hamburger} alt="close" /></button>
        <ul>
          <li><a href="/">Features</a></li>
          <li><a href="/">Company</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">About</a></li>
        </ul>
        <div className="buttons">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </div>

      <button className="menu-icon" onClick={showMenu}><img src={menu} alt="menu" /></button>

    </nav>
  )


}

export default Header