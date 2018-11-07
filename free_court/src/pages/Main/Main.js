import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GymComponent } from '../../components/Gym';
import _ from 'lodash';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import {
    thunk_load_main,
    thunk_request_update,
} from '../../ducks/main'

import './styles.css';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

class MainComponent extends Component {
    showGyms() {
        return _.map(this.props.gyms, (item, index) => {
            return (
                <GymComponent data={item} key={index} request_update={this.props.request_update}/>
            )
        })
    }
    componentDidMount () {
        this.props.load_main();
    }
    render () {

        return (
            <div>
                <AppBar className="header" position="static" style={{backgroundColor: "#4D3245"}}>
                    <Toolbar>
                        <Typography className="header" variant="h6" color="inherit">
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div><h1> </h1></div>
                <div className="flex-container">
                    {this.showGyms()}
                </div>
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

const mapDispatchToProps = dispatch => {
    return {
        request_update: () => {
            dispatch(thunk_request_update())
        },
        load_main: () => {
            dispatch(thunk_load_main())
        },
    }
}

// imported actions go here
export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
