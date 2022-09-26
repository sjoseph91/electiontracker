import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"
import {Route, Switch} from "react-router-dom";
import Options from "./components/Options"
import ByState from "./components/ByState"
import LargestDonors from "./components/LargestDonors";
import IndividualDonors from "./components/IndividualDonors"
function App() {
  

  return (
    
      <div className="app">
          <Header />
            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route  path="/options">
                  <Options />
              </Route>
              <Route  path="/byState">
                  <ByState />
              </Route>
              <Route  path="/largestDonors">
                  <LargestDonors />
              </Route>
              <Route  path="/individualDonors">
                  <IndividualDonors />
              </Route>
            </Switch>

          <Footer />
        </div>
    
      
    
  );
}

export default App
