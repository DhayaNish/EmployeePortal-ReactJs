import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import Table from './Profile/Table';
import Perfomance from './Profile/Perfomance';


function App(){
  return(
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Table" component={Table} />
        <Route path="/Perfomance" component={Perfomance}/>
      </Router>
    </div>
  );
}

export default App;