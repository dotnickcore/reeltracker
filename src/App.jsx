import { useState, useEffect } from 'react'
import './App.css'

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

// https://youtu.be/dCLhUialKPQ?feature=shared&t=1706

const Card = ({ title }) => {
  // (prevState) => prevState + 1
  const [count, setCount] = useState(0);

  // const [state variable, function that changes the state] = useState(defaultState)
  const [hasLiked, setHasLiked] = useState(false);
  
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  }, [hasLiked]);
  
  // For the code: count ? count : null, this means that the count will be rendered if it is greater than zero otherwise it will be null, count || null is the same

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} <br/> {count || null}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : '🤍'}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar"/>
      <Card title="The Lion King"/>
    </div>
  )
}

export default App
