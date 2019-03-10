import React, { Component } from 'react';
import '../App/App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Admin extends Component {
  state = {
    name: '',
    date_completed: '',
    tag: '',
    github: '',
    website: '',
    description: '',
    thumbnail: '',
  };
  handleSubmit = () => {
    console.log('going to get projects');
    this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state });
  }

componentDidMount() {
    this.getProjects();
}
onChange = (property) => (event) => {
    console.log(event.target.value)
    event.preventDefault();
    this.setState({
        ...this.state,
        [property]: event.target.value,
    });
};
// handleClick = (event) => {
//     event.preventDefault();
// };
getProjects = () => {
    //make call to server using axios
    console.log('going to get projects');
    this.props.dispatch({ type: 'FETCH_PROJECTS' });
}
    handleDelete = (id) =>()=> {
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: id }); 
    }
    
adminList() {
    console.log('this.props.projects', this.props.projects);
  
    return this.props.projects.map(project =>
        
        <tr key={project.id}>
            <td> {project.id} </td>
            <td> {project.name} </td>
            <td> {project.description} </td> 
            <td><button onClick={this.handleDelete(project.id)} className="deleteButton">Delete</button></td>
        </tr>
    )
}
render() {
    return (
        <div>
            <div>
                <h1>Admin</h1>
            </div>
            <div>
                <Link to="/home" className="Link-field" >Back to Projects</Link>
            </div>
            <div >
                
                <h2>Add New Project</h2>
                <div>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.onChange('name')} size="25"/>
                <input type="date" value={this.state.date} onChange={this.onChange('date_completed')} />
                <select value={this.state.tag} onChange={this.onChange('tag')}>
                    <option value="0">Select a Tag</option>
                    <option value="1">React</option>
                    <option value="2">jQuery</option>
                    <option value="4">Node</option>
                    <option value="5">SQL</option>
                    <option value="6">Redux</option>
                    <option value="7">HTML</option>
                </select>
                </div>
                <div>
                <input type="text" placeholder="GitHub URL" value={this.state.git} onChange={this.onChange('github')} size="22"/>
                <input type="text" placeholder="Web URL" value={this.state.web} onChange={this.onChange('website')} size="22"/>
                <select value={this.state.thumbnail} onChange={this.onChange('thumbnail')}>
                    <option value=" " >Add Thumbnail</option>
                    <option value="./images/bookstore.png">Book Store</option>
                    <option value="./images/calculator.png">calculator</option>
                    <option value="./images/feedback.png">feedback</option>
                    <option value="./images/list.png">List</option>
                    <option value="./images/restaurant.png">restaurant</option>
                </select>
                </div>
                <input type="text" placeholder="Description" value={this.state.description} onChange={this.onChange('description')} className="DescriptionField"/><br />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
            <table>
                <tbody>
                    {this.adminList()}
                </tbody>
            </table>
        </div>
    );
}
}
const mapReduxToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapReduxToProps)(Admin); 