/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios'
import TextFieldForm from './Components/TextFieldForm';
import './App.css'
import Header from './Components/Header';
function App() {
 
  const [moviesData, setMoviesData] = useState([]);
  const endpoint = `${import.meta.env.VITE_API_URL}movies/`;

  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.get(`${endpoint}?search=${searchQuery}`);
      const { data } = response;
      setMoviesData(data); 
    } catch (error) {
      console.error('Search failed:', error);
      alert('Error: Failed to search for the movie');
    }
  };

  // items have movie_title and genres as attributes.
  return (
    <>
   
      <TextFieldForm onSearch={handleSearch}/>
      <div>
        {moviesData.map(item =>
          <h2 style={{color: "#070F2B"}} key={item.id}> {item.movie_title}  - {item.genres}</h2>)}
      </div>
    </>
  )
}
export default App
