import React from 'react';
import './App.css';
import './style.scss'
// import ViewTest from './components/ViewTest'
// import LocationCard from './components/LocationCard'
// import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import Main from './components/Main'


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
