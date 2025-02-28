import React from 'react'

/*
const person = {
  name: 'Bruce Wayne',
  age: 36,
  location: 'Gotham City'
}

const { name, age, location } = person;

console.log(name) // Bruce Wayne
*/

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="text-white text-3xl">
      {searchTerm}
    </div>
  )
}

export default Search