import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
// import Project from '../Project/Project';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Admin from '../Admin/Admin';
// import Home from '../Home/Home';

class Header extends Component {

    render() {
        return (

            <div className="App">
                <div>
                    <header className="App-header">
                        <h1>Cheng-kou Tongkhuya</h1>
                        <img src="images/DededeSmash3.png" />
                    </header>
                </div>
            </div>

        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Header);
