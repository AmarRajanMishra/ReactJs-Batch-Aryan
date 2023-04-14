import { useState } from 'react'

function UseState() {
    
   const [state, setState] = useState({
    Name : 'Ajay',
    Age : 20,
    Gender : 'Male'
   })
   console.log(state)
   
   const update = () => {
    setState({

    })
   }
  return (
    <div>
      <h1>Name : {state.Name}</h1>
      <h2>Age : {state.Age}</h2>
      <h2>Gender : {state.Gender}</h2>
      <button onClick={update}>Click</button>
    </div>
  )
}

export default UseState
