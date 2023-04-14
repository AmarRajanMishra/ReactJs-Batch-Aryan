import {useState} from 'react'

function GithubUsersInfo() {
    const [username, setUserName] = useState('')
    const [user, setUser] = useState({})
    const getData = () => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUser(data)
        })
        .catch(err => console.log(err))
    }
    const {login, avatar_url, public_repos} = user
  return (
    <div>
        <h1>Github User Info</h1>
        <form action="">
            <input type="text" onChange={(e)=>setUserName(e.target.value)} />
        </form>
        <button onClick={getData}>GetUserData</button>
        <div>
           
            <h1>{login}</h1>
            <img src={avatar_url} />
            <h2>{public_repos}</h2>
        </div>
    </div>
  )
}

export default GithubUsersInfo


