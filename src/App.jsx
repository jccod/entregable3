import axios from 'axios'
import { useEffect, useState } from 'react'
import LocationInfo from './components/LocationInfo'
import './App.css'
import ResidentInfo from './components/ResidentInfo'
import ErrorFetch from './components/ErrorFetch'


function App() {

  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let URL
    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126) + 1
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
    }

    axios.get(URL)
      .then(response => {
        setLocation(response.data)
        setHasError(false)
      })
      .catch(error => {
        setHasError(true)
        consologe.log(error)
      })

  }, [locationInput])

  const handleSubmit = e => {
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value)
  }

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <form onSubmit={handleSubmit}>
        <input id='inputSearch' type="text" />
        <button>Search</button>
      </form>
      {
        hasError ?
          <ErrorFetch />
          :
          <>
            <LocationInfo location={location} />
            <div className='residents-container'>
              {
                location?.residents.map(url => (
                  <ResidentInfo key={url} url={url} />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
