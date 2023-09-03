import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  const closeNav=() =>{
    console.log(window.screen.width)
    if(window.screen.width < 850){
      setNavList(false);
    }
  }

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <h2 >ANJANI PUTRA ESTATES</h2>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link onClick={closeNav} to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <Link to="/login" className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </Link>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
