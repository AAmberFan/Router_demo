import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Main/Header";
import Content from "./Main/Content";

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    );
  }
}

export default App;
