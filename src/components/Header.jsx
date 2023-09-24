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
  backgroundColor: '#222', // Header background color
  padding: '20px',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '36px', // Header title font size
  fontFamily: 'Arial, sans-serif', // Stylish font family
  color: '#61dafb', // A vibrant blue color
};