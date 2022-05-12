import React from 'react'
import { Route } from "react-router-dom"
import Header from '../components/Header'
import AddSubstancias from '../components/addSubstancia'


function Home() {
  return (
    <>
    <Route path="/">
        <Header/>
        <AddSubstancias/>      
      </Route>
      </>
  )
}

export default Home
