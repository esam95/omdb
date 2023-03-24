import React, {useEffect, useState} from 'react'
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import MovieList from './MovieList';
import formStyle from './formStyle.module.css'

const MovieAPI = () => {

    const [movies, setMovies] = useState([]);

    const [search, setSearch] = useState('super');
    
    const [type, setType] = useState('all');

    const [errorMessage, setErrorMessage] = useState('')

    const fetchMovies  = async () =>{
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=d3ef435a&s=${search}`);
            const data = await response.json();
            
            data.Response === "True" ?
            setMovies(data.Search)
            : (setMovies([]), setErrorMessage(data.Error));
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [search])

    function handleChange (e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    function handleChangeSelect (e) {
        e.preventDefault();
        setType(e.target.value);
    }    
    

  return (
    <div>
        <Form handleChange={handleChange} search={search} handleChangeSelect={handleChangeSelect}/>
        {movies.length > 0 ? <MovieList movies={movies} handleChangeSelect={handleChangeSelect} type={type}/>
        : <p id={formStyle.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default MovieAPI
