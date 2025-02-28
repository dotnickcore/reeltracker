import React from 'react'

/*
const person = {
  name: 'Bruce Wayne',
  age: 36,
  location: 'Gotham City'
}

const { name, age, location } = person;

console.log(name) // Bruce Wayne
/*
  In simple terms, you should never mutate state in React because it can cause unexpected behavior. 
  React relies on state changes to know when to update the UI. 
  If you modify the state directly, React might not detect the change and won't re-render the component properly.

  Instead, always create a new copy of the state using methods like the spread operator (...) or map, and then update it using setState or the state setter function from useState. 
  This ensures React knows something changed and updates the UI correctly.
*/

/*
  You should never mutate a prop in React because props are read-only. 
  They are passed from a parent component to a child, and the child should not change them.

  If you mutate a prop, it can lead to unexpected bugs because the parent component still holds the original value, but the child is modifying it directly. 
  This breaks React’s one-way data flow and makes debugging harder.

  If a child component needs to update something, it should call a function provided by the parent (via props) to handle the update in the parent’s state.
*/

/*
  Explanation of the code: onChange={(event) => setSearchTerm(event.target.value)}

  What it does is:
    1. onChange: This triggers whenever the user types something in the input field.
    2. (event) => ...: This is an arrow function that runs every time the input changes.
    3. event.target.value: This gets the current value of the input field.
    4. setSearchTerm(event.target.value): This updates the state (searchTerm) with the new input value.

  In simple terms:
    - Every time the user types in the input, the state (searchTerm) gets updated with whatever they typed.
    - This makes the input controlled, meaning React manages its value instead of relying on the default browser behavior.
*/

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input type="text" placeholder="Search through thousands of movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
    </div>
  )
}

export default Search