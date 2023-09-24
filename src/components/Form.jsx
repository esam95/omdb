import React from 'react'

const Form = (props) => {
  return (
    <form style={formStyle} action="">
        <input style={inputStyle} type="text" onChange={props.handleChange} value={props.search}/>
        
        <label style={labelStyle}>Choose type:</label>
        
        <select style={selectStyle} onChange={props.handleChangeSelect} >
          <option value="" >All</option>
          <option value="movie" >Movies</option>
          <option value="series" >Series</option>
          <option value="game" >Games</option>
        </select>
    </form>
   
  )
}

export default Form

const formStyle = {
  // Style for the form element
  marginTop: '20px', // Add spacing above the form
  marginBottom: '20px', // Add spacing below the form
};

const inputStyle = {
  // Style for the input element
  padding: '10px',
  marginRight: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const labelStyle = {
  // Style for the label element
  marginRight: '10px',
};

const selectStyle = {
  // Style for the select element
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};