import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <nav style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 100px',
    backgroundColor: 'black',
    color: 'white'
   }}>
    <div>
        <h1>Mongitude</h1>
    </div>
    <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
        
        }}>
        <li>About</li>
        <li>
          <Link to={"/user/fetch"}>
          Users
          </Link>
        </li>
        <li>

          <Link to="/user/home">
          Home
          </Link>
          
          </li>
        <li>FAQ</li>
        <li>Contact Us</li>
    </ul>
   </nav>
  )
}

export default Nav