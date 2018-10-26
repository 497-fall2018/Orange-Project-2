import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



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
      	<Card elevation={1} style={{backgroundColor:"#FFFCFA"}}>>
          <Typography className="name" gutterBottom variant="h5" component="h2" style={{marginLeft : "5%"}}>
          	{this.props.title}
          </Typography>
          <img src={this.props.image} width="360" height="300"/>
          <h2 className="status"> {this.props.descrip} </h2>
          <Button size="small" color="primary">
          	Request Update
          </Button>
        </Card>
      </div>

    );
  }
}

export { GymComponent };
