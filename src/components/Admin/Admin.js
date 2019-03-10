import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';


class Admin extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <Router>
            <div >
                <div className="App-header">
                   <h1>Admin</h1> 
                </div>
                <div className="Link-field">
                    <Link to="/home">Back to Projects</Link>
                </div>
                    <form onSubmit={this.handleSubmit} className="Admin-body">
                        <input type="text" placeholder="Name" onChange={this.handleChange} />
                        <input type="date" onChange={this.handleChange} />
                        <select name="Select a Tag" >
                            <option value="react">React</option>
                            <option value="jQuery">jQuery</option>
                            <option value="node">Node</option>
                            <option value="sql">SQL</option>
                            <option value="redux">Redux</option>
                            <option value="html">HTML</option>
                        </select>
                        <div>
                            <input type="url" placeholder="Github URL" size="26"/>
                            <input type="url" placeholder="Website URL (Optional)" size="26"/>
                           
                        </div>
                        <div>
                            <input type="text" className="DescriptionField" placeholder="Description"/>
                        </div>
                        <input type="submit"/>
                    </form>
            </div>
            </Router>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Admin);