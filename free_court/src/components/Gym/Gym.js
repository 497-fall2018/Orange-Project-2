import React, { Component } from 'react';

import './styles.css';

class GymComponent extends Component {
  render() {
    return (
      <div >
          <h1 className="name">{this.props.title}</h1>
          <img src={this.props.image} width="360" height="300"/>
          <h2 className="status"> {this.props.descrip} </h2>
      </div>
    );
  }
}

export { GymComponent };
