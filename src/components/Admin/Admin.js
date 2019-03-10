import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';



class Admin extends Component {
  

    state = {
        newProject: {
            
            name: '',
            date_completed: '',
            tag: '',
            description: '',
            website: '',
            github: '',
            thumbnail: '',
        }
    }

handleChange=(property)=>event=>{
    event.preventDefault();
    console.log('event happended handleChange:', event.target.value)
    this.setState({
        newProject: {
            ...this.state.newProject,
            [property]: event.target.value,
        }
    });
}// end handleChange

    // addNewPlant = event => {
    //     event.preventDefault();
    //     this.props.dispatch({ type: 'POST_PLANT', payload: this.state.newPlant })
    //     this.setState({
    //         newPlant: {
    //             id: this.state.newPlant.id + 1,
    //             name: '',
    //             kingdom: '',
    //             clade: '',
    //             order: '',
    //             family: '',
    //             subfamily: '',
    //             genus: '',
    //         }
    //     });
    // }

render() {
        return (
           
            <div >
                <div className="App-header">
                   <h1>Admin</h1> 
                </div>
                <div className="Link-field">
                    <Link to="/home">Back to Projects</Link>
                </div>
                    <form onSubmit={this.handleSubmit} className="Admin-body">
                        <input type="text" placeholder="Name" onChange={this.handleChange('name')} value={this.state.name}/>
                    <input type="date" onChange={this.handleChange('date_completed')} value={this.state.date}/>
                    <select name="Select a Tag" onChange={this.handleChange('tag')} value={this.state.tag}>
                            <option value="1">React</option>
                            <option value="2">jQuery</option>
                            <option value="3">Node</option>
                            <option value="4">SQL</option>
                            <option value="5">Redux</option>
                            <option value="6">HTML</option>
                        </select>
                        <div>
                        <input onChange={this.handleChange('github')} type="url" placeholder="Github URL" size="26" value={this.state.github}/>
                        <input onChange={this.handleChange('website')} type="url" placeholder="Website URL (Optional)" size="26" value={this.state.website}/>  
                        </div>
                        <div>
                        <select value={this.state.thumbnail} onChange={this.handleChange('thumbnail')}>
                            <option value=" " >Add Image</option>
                            <option value="./images/bookstore.png">Book Store</option>
                            <option value="./images/calculator.png">calculator</option>
                            <option value="./images/feedback.png">feedback</option>
                            <option value="./images/list.png">List</option>
                            <option value="./images/restaurant.png">restaurant</option>
                        </select>
                        </div>
                        <div>
                            <input type="text" className="DescriptionField" placeholder="Description" onChange={this.handleChange('description')} />
                        </div>
                        <input type="submit" onClick={this.onSubmit}/>
                    </form>
            </div>
            
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Admin);