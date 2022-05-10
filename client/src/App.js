import React, { Component, Fragment } from 'react'
import './App.css'
import inputSubstancia from './components/inputSubstancia'

// function App() {
//   return (
//     <Fragment>
//       <div className="container">{inputSubstancia}</div>
//     </Fragment>
//   )
// }
//
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <inputSubstancia />
        </div>
      </Fragment>
    )
  }
}

// export default App
