import React from 'react'

const Form = (props) => {
  return (
    <form action="">
        <input type="text" onChange={props.handleChange} value={props.search}/>
        
        <label>Choose type:</label>
        
        <select onChange={props.handleChangeSelect} value={props.type}>
          <option value="all">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="game">Games</option>
        </select>
    </form>
   
  )
}

export default Form
