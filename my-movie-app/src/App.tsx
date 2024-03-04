import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import LivesCounter from './components/LivesCounter/LivesCounter';
import PointsCounter from './components/PointsCounter/PointsCounter';
import { useState } from 'react';
import gameOver from './assets/gameoverImage.jpg';
import moviesList from './assets/movies';

function App() {
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  let search = '';
  let selectedMovie = moviesList[getRandomInt()];

  function getNewMovie() {
    return moviesList[getRandomInt()];
  }


  function getRandomInt() {
    return Math.floor(Math.random() * (moviesList.length + 1));
  }

  const verifyInputMovieName = () => {
    if (selectedMovie.name.toLowerCase() === search.toLowerCase()) {
      setPoints(prev => prev + 1);
      selectedMovie = moviesList[getRandomInt()];
    } else {
      setLives(prev => prev - 1);
    }
  } 

  const handleInputChange = (value: string) => {
    search = value;
  };


  return (
    <>
    <header className='main-header'>
      <LivesCounter lives={lives}/>
      <PointsCounter points={points}/>
    </header>
    {
      lives > 0 ? ( 
      <main>
        <h1>Guess the movie</h1>
        <section>
          <div>{selectedMovie? selectedMovie.emoji : ''}</div>
        </section>
        <SearchBar onChange={handleInputChange} onClick={verifyInputMovieName}/>
      </main>) : 
      <main>
        <img src={gameOver}></img>
      </main>
    }
    </>
  )
}

export default App
