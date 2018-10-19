import React, { Component } from 'react';
// const mapStateToProps = (state, ownProps) => {
//     const { main } = state;
//     const { title } = main;
//     return {
//       ...ownProps,
//       title,
//     };
// };

import './styles.css';

class GymComponent extends Component {
  render() {
    return (
      <div >
          <h1 class="name">{this.props.title}</h1>
          <img src={this.props.image} width="360" height="300"/>
          <h2 class="status"> {this.props.descrip} </h2>
      </div>
    );
  }
}

export { GymComponent };

//export const Gym = { GymComponent };

// connect(mapStateToProps, {
// })(GymComponent);
