import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import EditPage from './routes/EditPage'
import DetailPage from './routes/DetailPage'


function App() {
  return (     
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/> 
     <Route path="/substancias/:id/Edit" element={<EditPage/>}/> 
     <Route path="/substancias/:id/Detail" element={<DetailPage/>}/>
    </Routes>  
    </BrowserRouter>
  )
}

export default App
