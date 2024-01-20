import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import AddMovies from './Pages/AddMovies'
import DefaultNavbar from './Components/DefaultNavbar'

function App() {

  return (
    <>
      <Router>
        <DefaultNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/addmovies' element={<AddMovies/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
