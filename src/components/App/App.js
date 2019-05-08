import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';


// Routes to home page and admin page
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <nav >
            <ul >
              <li><Link to="/home" >Home</Link></li>
            
              <li><Link to="/admin">Admin</Link></li>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/home" component={Home} />
            </ul>
          </nav>
        </div>
      </Router>    
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
