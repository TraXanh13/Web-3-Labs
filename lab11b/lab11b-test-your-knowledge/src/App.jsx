import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Movies from './movie-data.js'



function App() {
  const [movies, setMovies] = useState(Movies);
  const [favMovies, setFavMovies] = useState([]);

  const addFav = (movie) => {
    let currFav = [...favMovies];

    if(!movie){
      alert("Movie is not ready...\nPlease wait a moment")
      return
    }

    if(!currFav.find(m => m.id == movie.id)){
      currFav.push(movie);
      setFavMovies(currFav);
    } else{
      let index = currFav.map(m => m.id).indexOf(movie.id);
      currFav.splice(index, 1);
      setFavMovies(currFav)
    }
  }

  return (
    <main className="section">
      <article className="container">
        <Header favMovies={favMovies}/>
        <MovieList movies={movies} addFavMovie={addFav}/>
      </article>
    </main>
  );
}

export default App
