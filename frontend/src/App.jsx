import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails';
import SelectSeats from './pages/SelectSeats';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/seats/:id' element={<SelectSeats/>}/>

   </Routes>
    </BrowserRouter>
  )
}
