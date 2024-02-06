import { useState } from 'react'
import './App.css'

function App() {
  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)
  const [result, setResult] = useState(0)

  function calc() {
    setResult(Number(numberOne) + Number(numberTwo))
  }


  return (
    <>
      <div className="container">
        <div className="main">
          <input
            type="number" placeholder='Type number'
            onChange={(event) => {
              setNumberOne(event.currentTarget.value)
            }}
          />

          <p>+</p>

          <input
            type="number" placeholder='Type number'
            onChange={(event) => {
              setNumberTwo(event.currentTarget.value)
            }}
          />
          <button className='calculate' onClick={calc}>Calcular</button>
        </div>

        <div className="result">
          O resultado é
          <span>
            {result}
          </span>
        </div>
      </div>
    </>
  )
}

export default App
