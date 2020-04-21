import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';



function App() {
  return (
    <Router>
    <div className="App">
    
        <ProtectedRoute exact path="/friendslist" component={FriendsList} />
     <Route path="/login" component={Login}/>
     Hi
    </div>
  </Router>
  );
}

export default App;
