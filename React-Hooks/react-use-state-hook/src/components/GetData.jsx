import React from 'react'
import axios from 'axios'
function GetData() {
    const getData = () => {
        console.log('clicked...')
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(data => console.log(data.data))
    }
  return (
    <div>
        <button onClick={getData}>Click</button>
    </div>
  )
}

export default GetData