import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

};


class Project extends Component {

    componentDidMount() {
        this.getProject();
    }// run getProject when the page loads.

    getProject = () => {
        this.props.dispatch({ type: 'FETCH_PROJECT' })
    }

   
    render() {

        const { classes } = this.props;
        return (
            <div>
            <div className="App">
                <Card className={classes.card} >
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Project Name: {this.props.plantKingdom}
                        </Typography> 
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Project Pegasus: {this.props.plantName}
                        </Typography>
                            <img src="images/Screen1.png" />
                    </CardContent>
                   
                </Card>

            </div>
            <div className="App">
                <Card className={classes.card} >
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Project Name: {this.props.plantKingdom}
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Project NTM: {this.props.plantName}
                        </Typography>
                            <img src="images/ScreenGarden.png" />
                    </CardContent>

                </Card>

            </div>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

Project.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles) (connect(mapReduxStateToProps)(Project));