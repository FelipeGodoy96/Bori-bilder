import React, { useContext, useEffect } from 'react'
import { AplicacoesAPI } from '../API/Aplicacoes'
import AplicacoesFinder from '../APIs/AplicacoesFinder'
// import { SubstanciasAPI } from '../API/Substancias'

const AllAplicacoesList = (props) => {
  const {aplicacoes, setAplicacoes} = useContext(AplicacoesAPI)
  useEffect( () => {
    async function fetchData () {
      try {
      const response = await AplicacoesFinder.get("/getAllAplicacoes")
      setAplicacoes(response.data.data.aplicacoes)
    } catch (err) {
      console.error(err.message)
    }}
    fetchData()
  }, [])
  // const {substancias, setSubstancias } = useContext(SubstanciasAPI)
  // useEffect( () => {
  //   async function fetchData2 () {
  //     try {
  //       const response2 = await AplicacoesFinder.get("/getAllSubstancias")
  //       setSubstancias(response2.data.data.substancias)
  //     } catch (err) {
  //       console.error(err.message)
  //     }
  //   }
  //   fetchData2()
  // })
  return (
    <div className="list-group mt-4">
      <table className="table table-dark table-hover table-striped">
  <thead className="text-center table-success">
    <tr>
     <th scope="col">Substancia</th>
     <th scope="col">Meia-vida</th>
     <th scope="col">Dosagem</th>
     <th scope="col">Data/horario</th>
     <th scope="col">Local Aplicação</th>
     <th scope="col">Editar</th>
     <th scope="col">Apagar</th>
    </tr>
  </thead>
  <tbody className="text-center">
    {aplicacoes && aplicacoes.map(element => {
      return (        
      <tr key={aplicacoes.aplicacao_id}>
      <td>
        {element.substanciaid}
      </td>
      <td>undefined</td>
      <td>{element.dosagem}</td>
      <td>{element.data_horario}</td>
      <td>{element.localaplicacaoid}</td>
      <td><button className="btn btn-warning">Editar</button></td>
      <td><button className="btn btn-danger">Apagar</button></td>
    </tr>        
      )
    })}
    
  </tbody>
      </table>
    </div>
  )
}

export default AllAplicacoesList