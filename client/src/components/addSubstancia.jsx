import React from 'react'


const AddSubstancias = () => {
  return (
    <>
    <div className="mb-4">
<form className="d-flex mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Substância"
           
          ></input>
          <input
            type="number"
            className="form-control"
            
            placeholder="Meia-vida"
           
          ></input>
          <input
            type="text"
            className="form-control"
         
            placeholder="Descrição"
            
          ></input>
          <input
            type="text"
            className="form-control"
        
            placeholder="Colaterais"
          ></input>
          <button className="btn btn-success">Adicionar</button>
        </form>
        </div>
        </>
  )
}

export default AddSubstancias