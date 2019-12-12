import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import NewPage from './pages/newpage/newpage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/new' component={NewPage}/>
      </Switch>
    </div>
  );
}

export default App;
