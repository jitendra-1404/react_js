import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0);

  const addValue=()=>{
    if(counter<20){
      counter+=1;
      setCounter(counter)
    }
  }
  const removeValue=()=>{
    if (counter>0){
      counter-=1;
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>React JS</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br /><br />
      <button onClick={removeValue}>Remove value</button>
      <br /><br /><br /><br />
      <p style={{color:'pink'}}>*Limit 0 to 20*</p>
    </>
  )
}

export default App