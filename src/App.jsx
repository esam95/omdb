import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieAPI from './components/MovieAPI'
import Header from './components/Header'
import Footer from './components/Footer'
import formStyle from './components/formStyle.module.css'

function App() {
  

  return (
    <div className="App" id={formStyle.body}>
      <Header/>
      <MovieAPI/>
      <Footer/>
    </div>
  )
}

export default App