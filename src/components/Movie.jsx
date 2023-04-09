import React from 'react'
import formStyle from './formStyle.module.css'

const Movie = (props) => {
  return (
     <article key={props.movie.imdbID} id={formStyle.article}>
                              <h1 id={formStyle.title}>{props.movie.Title}</h1>
                              <p id={formStyle.date}>{props.movie.Year}</p>
                              <p id={formStyle.type}>{props.movie.Type}</p>
                              <img src={props.movie.Poster} alt="" />
                            </article>
    
    )
}

export default Movie
