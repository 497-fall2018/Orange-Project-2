import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './styles.css';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class GymComponent extends Component {
  render() {
    // const { classes } = props;
    return (
      <div >
      	<Paper elevation={1}>>
          <h1 className="name">{this.props.title}</h1>
          <img src={this.props.image} width="360" height="300"/>
          <h2 className="status"> {this.props.descrip} </h2>
          <Button size="small" color="primary">
          	Request Update
          </Button>
        </Paper>
      </div>

    );
  }
}

export { GymComponent };
