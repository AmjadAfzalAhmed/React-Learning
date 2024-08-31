import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
        //variable //function
  let [counter,setCounter] = useState(15);
  // let counter = 15
const maxValue = 20;
  const addValue = () => {
    // console.log('clicked', counter);
    // counter = counter + 1
    
    if(counter <= maxValue){
      setCounter(counter ++)
    }
  }

  const minValue = 0;
  const removeValue = () => {
    
    if(counter >= minValue){
      setCounter(counter --)
    }
  }

  return (
    <>
          <h1>Amjad Creations</h1>
    <h2>Counter value: {counter}</h2>

    <button 
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <br />
    <button
    onClick ={removeValue}
    >Remove value{counter}</button>    </>
  )
}

export default App
