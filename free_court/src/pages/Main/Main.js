import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GymComponent } from '../../components/Gym';
import { CalComponent } from '../../components/Calendar';
import _ from 'lodash';

import Spac from '../../assets/SPAC.jpg';
import Patten from '../../assets/Patten.jpg';
import Blom from '../../assets/Blom.jpg';

import {
    load_main
} from '../../ducks/main'

import './styles.css';

class MainComponent extends Component {
    showGyms() {
        return _.map(this.props.gyms, (item, index) => {
            return (
                <GymComponent title={item.title} image={item.body} descrip={item.open} key={index}/>
            )
        })
    }
    componentDidMount () {
        this.props.load_main();
    }
    render () {

        return (
            <div>
                <h1 className="header">
                    {this.props.title}
                </h1>
                <div className="flex-container">
                    {this.showGyms()}
                </div>
                <CalComponent className="center"/>
            </div>
        );
    }
}

export { MainComponent };

const mapStateToProps = (state, ownProps) => {
    const { main } = state;
    const { error_message, gyms, title } = main;
    return {
      ...ownProps,
      title,
      gyms,
      error_message
    };
};

// imported actions go here
export const Main = connect(mapStateToProps, {
    load_main,
})(MainComponent);
