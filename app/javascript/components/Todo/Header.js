import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link to="/">Todo</Link> | <Link to="/welcome">Welcome</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
}

export default Header
