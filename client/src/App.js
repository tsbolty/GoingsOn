import React from 'react';
import './App.css';
import ViewTest from './components/ViewTest'
import LocationCard from './components/LocationCard'
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <NavBar />
      {/* <ViewTest /> */}
      <LocationCard />
    </div>
  );
}

export default App;
