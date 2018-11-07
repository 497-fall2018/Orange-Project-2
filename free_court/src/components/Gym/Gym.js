import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { CalComponent } from '../Calendar';





import './styles.css';

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class GymComponent extends Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    return (
      <div >
        <Card elevation={1} style={{backgroundColor:"#FFFCFA",}} >
          <Typography className="name" gutterBottom variant="h5" component="h2" style={{marginLeft : "5%", marginTop: "2%"}}>
                {this.props.title}
          </Typography>
          <img src={this.props.image} width="360" height="300"/>
          <h2 className="status"> {this.props.descrip} </h2>
          <Button size="small" color="primary"
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more">
                See Schedule
          </Button>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit >
            <CardContent>
            <CalComponent sched={this.props.sched}/> 

            </CardContent>
          </Collapse>
        </Card>
      </div>

    );
  }
}

export { GymComponent };
