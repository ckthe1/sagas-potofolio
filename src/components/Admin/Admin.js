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
};// get inputs infos onChange

getProjects = () => {
    //make call to server using sagas
    console.log('going to get projects');
    this.props.dispatch({ type: 'FETCH_PROJECT' });
}
handleDelete = (id) =>()=> {
    this.props.dispatch({ type: 'DELETE_PROJECT', payload: id }); 
    }// delete function using sagas

adminList() {
    console.log('this.props.projects', this.props.projects);
  
    return this.props.projects.map(project =>
        
        <tr key={project.id}>
            <td> {project.name} </td>
            <td> {project.description} </td> 
            <td><button onClick={this.handleDelete(project.id)} className="deleteButton">Delete</button></td>
        </tr>
    )
}// map thru projects array and display name and description of project onto the DOM

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
                    {/* <a href={this.state.thumbnail} onChange={this.onChange('thumbnail')}></a> */}

                <select value={this.state.thumbnail} onChange={this.onChange('thumbnail')}>
                    <option value=" " >Add Thumbnail</option>
                    <option src="goat_small.png">Book Store</option>
                    <option src="images/fruit_basket.png">Fruit Basket</option>
                    <option value="images/ScreenGarden.png">Saga Garden</option>               
                    <option value="images/lazyLuigiPizzaParlor.png">Pizza Parlor</option>
                </select>
                </div>
                <input type="text" placeholder="Description" value={this.state.description} onChange={this.onChange('description')} className="DescriptionField"/><br />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Delete</th>
                    </tr>
                </thead>
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