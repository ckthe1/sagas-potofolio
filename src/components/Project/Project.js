import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';


const styles = {
    card: {
        width: 275,
        margin: 25,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        margin: 12,
    },
};// Cards Styles


class Project extends Component {

    componentDidMount() {
        this.getProject();
    }// run getProject when the page loads.

    getProject = () => {
        this.props.dispatch({ type: 'FETCH_PROJECT' })
    }

   
    render() {


        console.log('this.props.projects:', this.props.projects);
     
        return (      
            
            
            <div>
                <div className="flex-container">
                {this.props.projects.map((project)=>{
                    return(
                        <>
                            <ProjectCard 
                            projectId={project.id}
                                projectName={project.name}
                                projectDescription={project.description}
                                projectThumbnail={project.thumbnail}
                                projectWebsite={project.website}
                                projectGithub={project.github}
                                projectDate={project.date_completed}
                                projectTag={project.tag_id}
                        />
                      </>

                    );
                })}
            </div>

            </div>
        );
    }
}
// map thru projects array, and props being passed to ProjectCard

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

Project.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles) (connect(mapReduxStateToProps)(Project));