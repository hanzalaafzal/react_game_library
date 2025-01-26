import React, { useState, useEffect } from 'react'
import Search from './components/Search.jsx'
import Loader from './components/Loader.jsx';
import GameCard from './components/GameCard.jsx';
import { useDebounce } from 'react-use'
import { updateSearchCount, getSearchedGames } from './services/appwrite.js';

const API_BASE_URL = 'https://api.rawg.io/api';

const API_KEY = import.meta.env.VITE_IGDB_API_KEY;


const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
}


const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [gameList, setGameList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [trendingGames, setTrendingGames] = useState('');

  //Debounce the search term to prevent making too many API requests
  // by waiting for user to stop typing for 1000ms
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 1000,
    [searchTerm]);

  const fetchGames = async (query = '') => {
    try {

      setisLoading(true);
      setErrorMessage('');


      const endpoint = query
        ? `${API_BASE_URL}/games?key=${API_KEY}&search=${query}`
        : `${API_BASE_URL}/games?key=${API_KEY}`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('Failed to fetch games.');
      }

      const data = await response.json();

      if (data.Response == 'False') {
        setErrorMessage(data.Error || 'Failed to fetch games.');
        setGameList([]);
        return;
      }

      setGameList(data.results || [])

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }


    } catch (error) {
      console.log(error)
      setErrorMessage('Error fetching games. Please try again later.')
    } finally {
      setisLoading(false);
    }
  }

  const loadTrendingGames = async () => {
    try {
      
      const games = await getSearchedGames();
      
      setTrendingGames(games);
    
    } catch (error) {
      console.log(`Error Fetching Trending Games`);
    }
  }

  useEffect(() => {
    document.title = "GameDeX"
  }, []);

  useEffect(() => {
    fetchGames(debouncedSearchTerm);
  }, [debouncedSearchTerm]); //added search term to track changes in search field. Also [searchTerm] is making effect dependent on it.

  useEffect(() => {
    loadTrendingGames();
  },[])

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src="./poster-game.png" alt="Hero" />
          <h1 className='text-6xl font-bold underline'>Explore <span className='text-gradient'>Games</span>  you will enjoy without hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingGames.length > 0 && (
          <section className='trending'>
            <h2>Most Searched Games</h2>
            <ul>
              {trendingGames.map((game,index) => (
                <li key={game.$id}>
                  <p>{index + 1}</p>
                  <img src={game.poster_url}/>
                </li>
              ))}
            </ul>

          </section>
        )}
        <section>

        </section>

        <section className='all-games'>
          <h2>All Games</h2>

          {isLoading ? (

            <Loader />
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {gameList.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </ul>
          )}

        </section>
      </div>
    </main>
  )
}

export default App