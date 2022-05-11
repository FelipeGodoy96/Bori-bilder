import React, { Fragment } from 'react'

function InputSubstancia() {
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center mt-5">Substancias</h1>
        <form className="d-flex mt-5">
          <input type="text" className="form-control"></input>
          <button className="btn btn-success">Adicionar</button>
        </form>
      </div>
    </Fragment>
  )
}

export default InputSubstancia

// export default class InputSubstancia extends React.Component {
//   render() {
//     return (
//       <Fragment>
//         <h1 className="text-center mt-5">Substancias</h1>
//         <form className="d-flex">
//           <input
//             name="substancia"
//             id="substancia"
//             type="text"
//             className="form-control"
//           >
//             Substancia
//           </input>
//           <button className="btn btn-success">Adicionar</button>
//         </form>
//       </Fragment>
//     )
//   }
// }
