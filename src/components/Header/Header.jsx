import React, { useState } from 'react'
import {HiX} from 'react-icons/hi';
import {FaBars} from 'react-icons/fa';
import './myheader.css';

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () =>{
    setToggleIcon(!toggleIcon);
  }
  return (
    <nav className='nav-header'>
      <div className='header'>
        <div className='portfolio'>
          <a href="/">
            <img src="/portfolio2.png" alt="portfolio" />
          </a>
        </div>
        <div className="lists">
            <ul className={`list-ul ${toggleIcon ? "active" : ""}`}>
                <li><a href="/">HOME</a></li>
                <li><a href="https://drive.google.com/file/d/16Vk84DF48zmQ3wnQO1m8M8CL2rgFZL-4/view">RESUME</a></li>
                <li><a href="/projects">PROJECTS</a></li>
                <li><a href="/contact">CONTACT</a></li>
            </ul>
        </div>
        <div className='header-icon' onClick={handleToggle}>
        {
          toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
        }
        </div>
        <div className='links'>
          <a href="https://www.linkedin.com/in/arunydv01/">
            <img src="/linkedin.png" alt="linkedin"/>
          </a>
          <a href="https://github.com/arunydv01">
            <img src="/github.png" alt="github" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header