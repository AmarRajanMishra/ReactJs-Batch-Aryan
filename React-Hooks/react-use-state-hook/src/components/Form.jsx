import {useState} from 'react'

function Form() {
    const [inputVal, setInputVal] = useState('')
    const getInputVal = (e) => {
        // console.log(e.target.value)
        setInputVal(e.target.value)
    }

  return (
    <div>
        <form action="">
            <input type={'text'} onChange={(e)=>getInputVal(e)} />
        </form>
        <h1>Value : {inputVal}</h1>
    </div>
  )
}

export default Form