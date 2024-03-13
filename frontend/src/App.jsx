/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios'
import TextFieldForm from './Components/TextFieldForm';
import './App.css'
function App() {
 
  const [moviesData, setMoviesData] = useState([]);
  const endpoint = `${import.meta.env.VITE_API_URL}movies/`;

  const fetchData = async() =>{
    console.log("fetching...")
    const response = await axios(endpoint);
    const {data} = response
    setMoviesData(data)
  }

  const handleSearch = async (searchQuery) => {
    const newData = await newMovieData(searchQuery);
    if (newData) {
      setMoviesData(prev => [...prev, newData]);
    } else {
      alert('Error: Failed to add a new Movie');
    }
  };

  const newMovieData = async(searchQuery) =>{
      const movie_title = searchQuery;
      const genres = searchQuery; 
      const body = {movie_title, genres};
      const response = await axios.post(endpoint, body);
      return response.data;
  }

  useEffect(()=>{
    fetchData()
  }, [])

  // items have movie_title and genres as attributes.
  return (
    <>
      <TextFieldForm onSearch={handleSearch}/>
      <ul>
        {moviesData.map(item =>
          <li key={item.id}> {item.movie_title}  - {item.genres}</li>)}
      </ul>
    </>
  )
}

export default App
