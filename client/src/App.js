import React, { Fragment } from 'react'
import './App.css'
import InputSubstancia from './components/InputSubstancia'

function App() {
  return (
    <Fragment>
      <div className="container mt-3">
        <InputSubstancia />
      </div>
    </Fragment>
  )
}

// export default class App extends React.Fragment {
//   render() {
//     return (
//       <Fragment>
//         <inputSubstancia />
//       </Fragment>
//     )
//   }
// }

export default App
