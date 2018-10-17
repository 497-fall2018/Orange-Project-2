import React, { Component } from 'react';
import { connect } from 'react-redux';
import yao from '../../assets/yao.jpg';


import './styles.css';

class NoMatchComponent extends Component {
  render() {
    return (
      <div >
          <h1> 404. No such endpoint exists.</h1>
          <img src={yao} alt="Yao is ripped"/>
      </div>
    );
  }
}

export { NoMatchComponent };

const mapStateToProps = (state, ownProps) => {
    return {
      ...ownProps
    };
};

export const NoMatch = connect(mapStateToProps, {
})(NoMatchComponent);