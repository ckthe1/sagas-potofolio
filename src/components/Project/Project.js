import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';



class Project extends Component {

    getProject = () => {
        this.props.dispatch({ type: 'FETCH_PROJECT' })
    }

    componentDidMount() {
        this.getProject();
    }


    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <div>
                  

                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Project)