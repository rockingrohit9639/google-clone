import './App.css';
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import NewsPage from './pages/NewsPage';
import ImagesPage from './pages/ImagesPage';

function App()
{
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path="/news">
            <NewsPage />
          </Route>
          
          <Route exact path="/images">
            <ImagesPage />
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
