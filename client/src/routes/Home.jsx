import React from 'react'
import Header from '../components/Header'
import AddAplicacao from '../components/AddAplicacao'
import AllAplicacoesList from  '../components/AllAplicacoesList'


function Home() {
  return (
    <>    
        <Header/>
        <AddAplicacao/>  
        <AllAplicacoesList/>    
      </>
  )
}

export default Home
