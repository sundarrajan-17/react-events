import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
        <h1>Events App</h1>
        <input type="text" placeholder='Search' className='header-input'/>
        <Link to="/Addevent">
             <button>Add Event</button>
        </Link>
    </div>
  )
}

export default Header