import React from 'react';
import './style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import Main from './components/Main'
import NavBar from './components/NavBar'
import EditBusinessInfo from './components/editProfile/EditBusinessInfo'
import BusinessInfo from './components/viewProfile/BusinessInfo'

function App() {
    const { user } = useAuth0();
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
            <Router>
            <NavBar />
                <Switch>
                  {user &&
                  <>
                    <Route path="/editbusinessinfo">
                        <EditBusinessInfo user= {user}/>
                    </Route>
                    <Route path="/businessinfo">
                        <BusinessInfo user= {user}/>
                    </Route>
                  </>
                  }
                  <Route path="/">
                      <Main user= {user}/>
                  </Route>
                </Switch>
            </Router>
        </header>
    </div>
  );
}

export default App;
