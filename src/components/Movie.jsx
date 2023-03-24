import React from 'react'
import formStyle from './formStyle.module.css'

const Movie = (props) => {
  return (
    props.type === "all" ?  <article key={props.movie.imdbID} id={formStyle.article}>
                              <h1 id={formStyle.title}>{props.movie.Title}</h1>
                              <p id={formStyle.date}>{props.movie.Year}</p>
                              <p id={formStyle.type}>{props.movie.Type}</p>
                              <img src={props.movie.Poster} alt="" />
                            </article>
    : props.type === props.movie.Type ?
        <article key={props.movie.imdbID} id={formStyle.article}>
          <h1 id={formStyle.title}>{props.movie.Title}</h1>
          <p id={formStyle.date}>{props.movie.Year}</p>
          <p id={formStyle.type}>{props.movie.Type}</p>
          <img src={props.movie.Poster} alt="" />
        </article>
    : null
    )
}

export default Movie
