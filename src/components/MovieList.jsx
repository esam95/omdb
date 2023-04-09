import React from 'react'
import Movie from './Movie'
import formStyle from './formStyle.module.css'

const MovieList = (props) => {
  return (
    <div id={formStyle.container}>
        {props.movies.map((movie) =>
          <Movie movie={movie} key={movie.imdbID} />
        )}
    </div>
  )

}
export default MovieList
