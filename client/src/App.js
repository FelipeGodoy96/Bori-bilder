import React, { Component, Fragment } from 'react'
import './App.css'
import inputSubstancia from './components/inputSubstancia'

// function App() {
//   return (
//     <Fragment>
//       <inputSubstancia />
//     </Fragment>
//   )
// }

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <inputSubstancia />
      </Fragment>
    )
  }
}

// export default App
