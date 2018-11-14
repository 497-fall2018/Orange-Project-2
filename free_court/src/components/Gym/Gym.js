import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Collapse from '@material-ui/core/Collapse';

import {
  CalComponent
} from '../Calendar';



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
    var datetime = new Date();
    var data = this.props.data;
    console.log(data);
    return (
      <div >
        <Card elevation={1} style={{backgroundColor:"#FFFCFA",}} >
          <Typography className="name" gutterBottom variant="h5" component="h2" style={{marginLeft : "5%", marginTop: "2%"}}>
                {data.name}
          </Typography>
          <div style={{display: "block", margin:"auto"}}>
            <img style={{display: "block", margin:"auto"}} src={data.pic_url} width="360" height="300"/>
          </div>
          <h2 className="status"> {data.status} </h2>
          <h4 className="status"> {data.date_updated} </h4>
          <Button 
            size="small" 
            color="primary"
            onClick={() => this.props.request_update(data.name)}
          >  
            Request Update
          </Button>
          <Button size="small" color="primary"
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more">
                See Schedule
          </Button>


          <Button size="small" color="primary"
            onClick={() => this.props.toggle_modal(data.name)}
            aria-label="Show more">
                Notify me when available
          </Button>


          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit >
            <CardContent>
              <CalComponent sched={data.schedule}/> 
            </CardContent>
          </Collapse>
        </Card>
      </div>

    );
  }
}

export { GymComponent };
