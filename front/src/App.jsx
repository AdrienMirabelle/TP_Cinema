import { useState } from 'react'
import './App.css'

import axios from 'axios'

function App() {

  const [film, setFilm] = useState({})
  axios.delete('http://localhost:3000/delete/{645bca8f68c0c58624d5e9b2}')
    .then(res => {
      setFilm(res.data)
    })
    .catch(err => {
      console.log(err)
    })

  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
