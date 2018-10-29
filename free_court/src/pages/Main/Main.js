import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GymComponent } from '../../components/Gym';
import { CalComponent } from '../../components/Calendar';
import _ from 'lodash';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Spac from '../../assets/SPAC.jpg';
import Patten from '../../assets/Patten.jpg';
import Blom from '../../assets/Blom.jpg';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';








import {
    load_main
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
                <GymComponent title={item.name} image={item.pic_url} descrip={item.open} sched={item.schedule} key={index}/>
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

// imported actions go here
export const Main = connect(mapStateToProps, {
    load_main,
})(MainComponent);
