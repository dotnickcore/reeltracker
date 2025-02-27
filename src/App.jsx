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

const Card = ({ title, rating, isCool }) => {
  return (
    <div>
      <h2>{title}</h2>
      {rating && <p>Rating: {rating}</p>}
      {isCool && <p>This is cool! 😎</p>}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" rating ={1} isCool={false}/>
      <Card title="The Lion King" rating={5} isCool={true}/>
    </div>
  )
}

export default App
