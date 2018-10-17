import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

class MainComponent extends Component {
    render () {
        return (
            <div>
                <h1>
                    {this.props.title}
                </h1>
            </div>
        );
    }
}

export { MainComponent };

const mapStateToProps = (state, ownProps) => {
    const { main } = state;
    const { title } = main;
    return {
      ...ownProps,
      title,
    };
};

// imported actions go here
export const Main = connect(mapStateToProps, {
})(MainComponent);

