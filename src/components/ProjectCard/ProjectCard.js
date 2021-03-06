import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Linkify  from 'react-linkify';


const styles = {
    card: {
        width: 450,
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

//Use material UI to display info as that look like cards.
class ProjectCard extends Component {

    render() {

        const { classes } = this.props;
        return (
            <Card className={classes.card} >
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    </Typography>
                    
                    <Typography variant="h5" component="h2">
                            Project: {this.props.projectName}
                    </Typography>
                    <Typography  >
                            Description: {this.props.projectDescription}
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                            Thumbnail: {this.props.projectThumbnail}
                    </Typography>

                    <Typography component="p">
                        <Linkify> GitHub: {this.props.projectGithub}</Linkify>
                    </Typography>

                    <Typography component="p">
                        <Linkify>Website: {this.props.projectWebsite}</Linkify>
                    </Typography>

                    <Typography component="p">
                            Date: {this.props.projectDate}
                    </Typography>

                </CardContent>
            </Card>
        );
    }
}
                        
                        
const mapStateToProps = (reduxState) => {
    return reduxState;
};
                                                               
ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(ProjectCard));

