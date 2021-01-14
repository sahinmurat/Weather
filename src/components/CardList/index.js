import React, {useEffect, useState} from 'react'
import Card from '../Card/index'
import axios from 'axios'

const apiKey = 'f7d8b455b98784f78ffb0cb58f631580'
const baseUrl = 'https://api.themoviedb.org/3/search/movie?'



function CardList() {

const [movie, setMovie] = useState('')

useEffect(() => {
    axios.get(baseUrl, { 
        params: {
          api_key: apiKey,
          page:1,
          query:' Star Wars'
        }
      })
      .then((response) => setMovie(response.data.results))
      .catch((error)=> console.log(error) )
}, [])
console.log('movie', movie)
    return (
        <div>
            {movie.map(mov =>{
                return  <Card movie = {mov} />
            }) }
           
        </div>
    )
}

export default CardList

