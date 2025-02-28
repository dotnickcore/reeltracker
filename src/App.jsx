import './App.css'
import { useEffect, useState } from 'react'
import Search from './components/Search'

/*
  React components are reusable, self-contained building blocks that define the UI by managing their own state and rendering based on props. 
  They can be functional or class-based, with functional components being more common due to their simplicity and support for hooks.
*/

/*
  Props (short for "properties") are read-only inputs passed to React components to customize their behavior and appearance. 
  They allow data to flow from parent to child components, enabling reusability and dynamic rendering.
  Parent -> child
  Arguments you pass into a function
*/

/*
  Inline stylings have a preference over CSS stylings
*/

/*
  State is a built-in feature in React that allows components to store and manage dynamic data that can change over time. 
  When state updates, React re-renders the component to reflect the new data in the UI.
*/

/*
  Hooks are functions that let functional components manage state and side effects without using classes. 
  They include built-in hooks like useState for state management and useEffect for handling side effects.
*/

/*
  useState is a React hook that allows functional components to create and manage local state, returning a state variable and a function to update it. 
  useEffect is a hook used for handling side effects like data fetching, subscriptions, or DOM updates, running after renders based on specified dependencies.
  useContext is a React hook for sharing data across components. Thus, access and share context values without prop drilling, making global state management easier.
  useCallback is a React hook for optimizing callback functions. So, it memoizes a callback function, preventing unnecessary re-creations on re-renders, which helps optimize performance in components.

  It uses Array Destructuring when handling both the current state and updating it with a function
*/

/*
  States and props determine if something has changed
*/

// https://github.com/public-apis/public-apis

// https://youtu.be/dCLhUialKPQ?feature=shared&t=1706

// {errorMessage && <p className="text-red-500">{errorMessage}</p>} means that if there is an error message, it will show up in red but nothing if no error was generated

/*
  For the code <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>: searchTerm is the current value of the search query (likely the movie title or keywords you want to search for).
  setSearchTerm is a function that updates the state of searchTerm (typically, this would be triggered when the user types in a search input field).

  With this:
  1. The user types in a movie name or search term into the input field.
  2. The searchTerm state is updated in real-time with each character typed.
  3. The setSearchTerm function (likely passed as a prop) handles this update by modifying the value of searchTerm.
  4. Once the search term is updated, the search query could trigger an API call (for example, to an API like TMDB) to fetch movie results based on the current searchTerm.
*/

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  // only mutate a state only using the state function
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      if (data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fethc movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner"/>
            <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          </header>

          <section className="all-movies">
            <h2>All Movies</h2>

            {isLoading ? (
              <p className="text-white">Loading ... </p>
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <p key={movie.id} className="text-white">{movie.title}</p>
                ))}
              </ul>
            )};
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
