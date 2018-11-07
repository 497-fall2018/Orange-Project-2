import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Collapse from '@material-ui/core/Collapse';
import { CalComponent } from '../Calendar';

import './styles.css';



class GymComponent extends Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    var datetime = new Date();
    var data = this.props.data;
    return (
      <div >
        <Card elevation={1} style={{backgroundColor:"#FFFCFA",}} >
          <Typography className="name" gutterBottom variant="h5" component="h2" style={{marginLeft : "5%", marginTop: "2%"}}>
                {data.name}
          </Typography>
          <img src={data.pic_url} width="360" height="300"/>
          <h2 className="status"> {data.status} </h2>
          <Button 
            size="small" 
            color="primary"
            onClick={() => this.props.request_update(data['id'])}
          >  
            Request Update
          </Button>
          <Button size="small" color="primary"
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more">
                See Schedule
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
