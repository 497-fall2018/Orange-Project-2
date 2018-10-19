import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GymComponent } from '../../components/Gym';

import Spac from '../../assets/SPAC.jpg';
import Patten from '../../assets/Patten.jpg';
import Blom from '../../assets/Blom.jpg';

import './styles.css';

class MainComponent extends Component {
    render () {
      var spac_desc = "Full";
      var patten_desc = "Empty";
      var blom_desc = "Semi-Full";

        return (
            <div>
                <h1>
                    {this.props.title}
                </h1>

                <GymComponent title="SPAC" image={Spac} descrip="Full"/>
                <GymComponent title="Patten" image={Patten} descrip={patten_desc}/>
                <GymComponent title="Blom" image={Blom} descrip={blom_desc}/>

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
