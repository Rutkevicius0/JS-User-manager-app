import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app-container">
        <h1>Vartotojų tvarkyklė</h1>
        <UserForm />
      </div>
    );
  }
}

export default App;
