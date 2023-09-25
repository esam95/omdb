import React, {useEffect, useState} from 'react'
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import MovieList from './MovieList';
import formStyle from './formStyle.module.css'

const MovieAPI = () => {

    const [movies, setMovies] = useState([]);

    const [search, setSearch] = useState('super');
    
    const [type, setType] = useState('');

    const [errorMessage, setErrorMessage] = useState('')


    const fetchMovies  = async () =>{
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=d3ef435a&s=${search}&type=${type}`);
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
    }, [search, type])

    function handleChange (e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    function handleChangeSelect (e) {
        e.preventDefault();
        setType(e.target.value);
    }    
    console.log(type)

  return (
    <div>
        <Form handleChange={handleChange} search={search} handleChangeSelect={handleChangeSelect}/>
        {movies.length > 0 ? <MovieList movies={movies} />
        : <p id={formStyle.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default MovieAPI
