import Card from "./components/Card.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="main-heading">Welcome to the React Application</h1>
      <h3 className="subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        velit.
      </h3>
      <div className="cards-container">
        <Card
          title="card1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image=" https://images.unsplash.com/photo-1763996313498-8c60ed0610ac?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          btn="click me"

        />
        <Card
          title="card2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://images.unsplash.com/photo-1763673536983-4a46b60c68e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
          btn ="click me"
        />
        <Card
          title="card3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://images.unsplash.com/photo-1763718205007-fb085a276026?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
          btn="click me"
        />
        <Card
          title="card4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://images.unsplash.com/photo-1763076705118-8c3c03fee057?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          btn="click me"

        />
      </div>
    </div>
  );
}

export default App;
