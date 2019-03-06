import React from 'react'

import {Link} from 'react-router-dom';


function Header() {
  return (
    <div>
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
    <p></p>
    </div>
  )
}

const headerStyle={
  background: '#4e54c8',
  color:'#fff',
  textAlign: 'center',
  padding: '10px',
  borderRadius: '5px'
}

const linkStyle={
  color:'#fff',
  textDecoration:'none'
}
export default Header;