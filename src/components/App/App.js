import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Project from '../Project/Project';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cheng-kou Tongkhuya</h1>
          <img src = "images/goat_small.jpg" />
      </header>
      <div>
          <Project/>

      </div>

      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
