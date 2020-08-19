import React from 'react';
import './App.css';
import './style.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import ViewTest from './components/ViewTest'
// import LocationCard from './components/LocationCard'
// import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import Main from './components/Main'
import NavBar from './components/NavBar'
import EditBusinessInfo from './components/EditBusinessInfo'
import BusinessInfo from './components/BusinessInfo'


function App() {
    const { user } = useAuth0();
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
            <NavBar />
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* The following commented out code will only display edit and view profile options if the user is logged in. Commented out for development purposes. */}
                    {/* {user &&
                    <> */}
                    <li>
                        <Link to="/editbusinessinfo">Edit Profile</Link>
                    </li>
                    <li>
                        <Link to="/businessinfo">View Profile</Link>
                    </li>
                    {/* </>
                    } */}
                </ul>
                <Switch>
                    <Route path="/editbusinessinfo">
                        <EditBusinessInfo user= {user}/>
                    </Route>
                    <Route path="/businessinfo">
                        <BusinessInfo user= {user}/>
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </header>
    </div>
  );
}

export default App;
