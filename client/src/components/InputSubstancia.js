// import React, { Fragment, useState } from 'react'

// function InputSubstancia() {
//   const [nome, setNome] = useState('')
//   const [meia_vidah, setMeia_vidah] = useState('')
//   const [descricao, setDescricao] = useState('')
//   const [colaterais, setColaterais] = useState('')

//   const onSubmitForm = async e => {
//     e.preventDefault()
//     try {
//       const body = { nome, meia_vidah, descricao, colaterais }
//       const response = await fetch('', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(body)
//       })
//       console.log(response)
//     } catch (err) {
//       console.error(err.message)
//     }
//   }

//   return (
//     <Fragment>
//       <div className="container">
//         <h1 className="text-center mt-5">Substancias</h1>
//         <form className="d-flex mt-5" onSubmit={onSubmitForm}>
//           <input
//             type="text"
//             className="form-control"
//             value={nome}
//             placeholder="Substância"
//             onChange={e => setNome(e.target.value)}
//           ></input>
//           <input
//             type="number"
//             className="form-control"
//             value={meia_vidah}
//             placeholder="Meia-vida"
//             onChange={f => setMeia_vidah(f.target.value)}
//           ></input>
//           <input
//             type="text"
//             className="form-control"
//             value={descricao}
//             placeholder="Descrição"
//             onChange={g => setDescricao(g.target.value)}
//           ></input>
//           <input
//             type="text"
//             className="form-control"
//             value={colaterais}
//             placeholder="Colaterais"
//             onChange={h => setColaterais(h.target.value)}
//           ></input>
//           <button className="btn btn-success">Adicionar</button>
//         </form>
//       </div>
//     </Fragment>
//   )
// }

// export default InputSubstancia
