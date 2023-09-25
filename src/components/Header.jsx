import React from 'react'

const Header = () => {
  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>OMDB API</h1>
    </div>
  )
}

export default Header

const headerStyle = {
  backgroundColor: '#222', 
  padding: '20px',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '36px', 
  fontFamily: 'Arial, sans-serif', 
  color: '#61dafb', 
};