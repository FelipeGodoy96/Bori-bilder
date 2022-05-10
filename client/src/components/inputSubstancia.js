import React, { Component, Fragment } from 'react'

// const inputSubstancia = () => {
//   return (
//     <Fragment>
//       <h1 className="text-center mt-5">Substancias</h1>
//       <form className="d-flex">
//         <input type="text" className="form-control">
//           Substancia
//         </input>
//         <button className="btn btn-success">Adicionar</button>
//       </form>
//     </Fragment>
//   )
// }

// export default inputSubstancia

export default class inputSubstancia extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="text-center mt-5">Substancias</h1>
        <form className="d-flex">
          <input type="text" className="form-control">
            Substancia
          </input>
          <button className="btn btn-success">Adicionar</button>
        </form>
      </Fragment>
    )
  }
}
