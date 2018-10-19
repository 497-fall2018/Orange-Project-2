import React, { Component } from 'react';
// const mapStateToProps = (state, ownProps) => {
//     const { main } = state;
//     const { title } = main;
//     return {
//       ...ownProps,
//       title,
//     };
// };

class GymComponent extends Component {
  render() {
    return (
      <div >
          <h1>{this.props.title}</h1>
          <img src={this.props.image} width="600" height="500"/>
          <h2> {this.props.descrip} </h2>
      </div>
    );
  }
}

export { GymComponent };

//export const Gym = { GymComponent };

// connect(mapStateToProps, {
// })(GymComponent);
