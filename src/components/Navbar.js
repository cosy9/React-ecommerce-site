import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross, ImCart } from 'react-icons/im'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { count } = useGlobalContext()
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <h1>FakeStore</h1>
        </Link>
        <ul className={`${showLinks ? 'nav-links nav-show' : 'nav-links'} `}>
          <li>
            <NavLink
              activeClassName='nav-active'
              onClick={() => setShowLinks(!showLinks)}
              exact
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='nav-active'
              onClick={() => setShowLinks(!showLinks)}
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='nav-active'
              onClick={() => setShowLinks(!showLinks)}
              to='/cart'
            >
              Cart <ImCart />
              <span className='cart-span'>{count ? `${count}` : ''}</span>
            </NavLink>
          </li>
        </ul>
        <button onClick={() => setShowLinks(!showLinks)} className='nav-toggle'>
          {showLinks ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
