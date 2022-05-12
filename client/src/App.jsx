import React from 'react'
import './App.css'
import { BrowserRouter as Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import EditPage from './routes/EditPage'
import DetailPage from './routes/DetailPage'


function App() {
  return (  
    <>
    <Routes>
     <Route exact path="/" component={Home}/>
     <Route exact path="/substancias/:id/Edit" component={EditPage}/>
     <Route exact path="/substancias/:id/Detail" component={DetailPage}/>
    </Routes>  
    </>
  )
}

export default App
