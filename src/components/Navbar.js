
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
  <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Test <i className='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/overview' className='nav-links' onClick={closeMobileMenu}>
              Overview
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
              Résumé
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/showcase' className='nav-links' onClick={closeMobileMenu}>
              Showcase
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </nav>
  </>
  )
}

export default Navbar;
