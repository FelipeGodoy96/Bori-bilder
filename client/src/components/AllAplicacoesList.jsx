import React from 'react'

const AllAplicacoesList = () => {
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
    <tr>
      <td>
        Enantato
      </td>
      <td>5h</td>
      <td>200mg/ml</td>
      <td>12/05/22 15:00</td>
      <td>Vasto lateral direito</td>
      <td><button className="btn btn-warning">Editar</button></td>
      <td><button className="btn btn-danger">Apagar</button></td>
    </tr>
  </tbody>
      </table>
    </div>
  )
}

export default AllAplicacoesList