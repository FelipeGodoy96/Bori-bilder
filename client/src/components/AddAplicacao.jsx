import React, { useState } from 'react'
import AplicacoesFinder from '../APIs/AplicacoesFinder'


const AddAplicacao = () => {
  const [substancia, setSubstancia] = useState("Selecione a substância")
  const [quantidade, setQuantidade] = useState("")
  const [dosagem, setDosagem] = useState("")
  const [data, setData] = useState("")
  const [hora, setHora] = useState("")
  const [localAplicacao, setLocalAplicacao] = useState("Local aplicação")
  const [ladoAplicacao, setLadoAplicacao] = useState("Lado aplicação")
  const [quadrante, setQuadrante] = useState("")

  const submitForm = (event) => {
    event.preventDefault()
    try {
      AplicacoesFinder.post("/newAplicacao", {
        substancia: substancia.value,
        quantidade: quantidade,
        dosagem: dosagem,
        data: data,
        hora: hora,
        localAplicacao: localAplicacao,
        ladoAplicacao: ladoAplicacao,
        quadrante: quadrante
      })
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <>
    <div className="mb-3">
      
<form className="mt-5">
  <div className="d-flex justify-content-between">
    <div className="col">
<select className="form-select" aria-label="" value={substancia} onChange={(e) => setSubstancia(e.target.value)} required>
  <option disabled>Selecione a substância</option>
  <option value="1">Enantato de Testosterona</option>
  <option value="2">Propionato de Testosterona</option>
  <option value="3">Metandrostenolona</option>
</select>
</div>

<div className="col">
          <input
            type="text"
            className="form-control"
            
            placeholder="Quantidade (mL)" required
            value={quantidade} onChange={(e) => setQuantidade(e.target.value)}
          ></input>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="mg/mL" required value={dosagem} onChange={(e) => setDosagem(e.target.value)}></input>
          
          </div>
          <div className="col">
          <input
            type="date"
            className="form-control" required
            value={data} onChange={(e) => setData(e.target.value)}
          ></input>
          </div>
          <div className="col">
          <input
            type="time"
            className="form-control" required
            value={hora} onChange={(e) => setHora(e.target.value)}
          ></input>
          </div>
          <div className="col">
          <select className="form-select" aria-label="" required  value={localAplicacao} onChange={(e) => setLocalAplicacao(e.target.value)}>
  <option disabled>Local de aplicação</option>
  <option value="1">Vasto lateral</option>
  <option value="2">Glúteo</option>
  <option value="3">Deltóide</option>
</select>
          </div>
          <div className="col">
            <select className="form-select" value={ladoAplicacao} onChange={(e) => setLadoAplicacao(e.target.value)}>
              <option disabled>Lado da aplicação</option>
              <option value="1">Direito</option>
              <option value="2">Esquerdo</option>
            </select>
          </div>
          <div className="col">
            <input className="form-control" type="text" placeholder="Quadrante" value={quadrante} onChange={(e) => setQuadrante(e.target.value)}></input>
          </div>
          <div className="col">
          <button onClick={submitForm} type="submit" className="btn btn-success">Adicionar</button>
          </div>
          </div>
        </form>
        </div>
        </>
  )
}

export default AddAplicacao