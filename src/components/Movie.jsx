import { useState, useEffect } from 'react'
import styled from 'styled-components'
export default function Movie() {
  const [movies, setMovies ] = useState([])



  useEffect(() => {
   fetch(
     'https://api.themoviedb.org/3/movie/now_playing?api_key='
   )
     .then((response) => response.json())
     .then((data) => {
       console.log(data.results)
       setMovies(data.results)
     })
     .catch((error) => console.log(error))
  }, [movies, setMovies])

  return (
    <Card>
      <img
        src='https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg'
        alt=''
      />
      <h3>title</h3>
      <p>overview</p>
      <p>release_date</p>
      <p>Movie release date</p>
      <p>Movie genre</p>
    </Card>
  )
}

const Card = styled.div`
  ${'' /* display: inline-flex; */}
  ${
    '' /* width: 100%;
  height: 100%; */
  }
  border: 1px solid #a0ffe2;
`
