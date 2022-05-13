import React from 'react'



const AddAplicacao = () => {
  return (
    <>
    <div className="mb-3">
      
<form className="mt-5">
  <div className="d-flex justify-content-between">
    <div className="col">
<select className="form-select" aria-label="Default select example" required>
  <option selected disabled>Selecione a substância</option>
  <option value="1">Enantato de Testosterona</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>

<div className="col">
          <input
            type="text"
            className="form-control"
            
            placeholder="Quantidade (mL)" required
           
          ></input>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="mg/mL" required></input>
          
          </div>
          <div className="col">
          <input
            type="date"
            className="form-control" required
            
          ></input>
          </div>
          <div className="col">
          <input
            type="time"
            className="form-control" required
           
          ></input>
          </div>
          <div className="col">
          <select className="form-select" aria-label="Default select example" required>
  <option selected disabled>Local de aplicação</option>
  <option value="1">Vasto lateral</option>
  <option value="2">Glúteo</option>
  <option value="3">Deltóide</option>
</select>
          </div>
          <div className="col">
            <select className="form-select">
              <option selected disable>Lado da aplicação</option>
              <option value="1">Direito</option>
              <option value="2">Esquerdo</option>
            </select>
          </div>
          <div className="col">
            <input className="form-control" type="text" placeholder="Quadrante"></input>
          </div>
          <div className="col">
          <button className="btn btn-success">Adicionar</button>
          </div>
          </div>
        </form>
        </div>
        </>
  )
}

export default AddAplicacao