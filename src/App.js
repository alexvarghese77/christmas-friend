import React, { Component } from 'react';
import { Login } from './component/login'
import { Home } from './component/home'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        {/* <Login></Login> */}
        <Home></Home>
      </>
    );
  }
}

export default App;
