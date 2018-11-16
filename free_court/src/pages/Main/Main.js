import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GymComponent } from '../../components/Gym';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';



import _ from 'lodash';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import {
    toggle_modal,
    phone_edit,
    thunk_subscribe,
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
                <GymComponent data={item} key={index} request_update={this.props.request_update} toggle_modal={this.props.toggle_modal} />
            )
        })
    }
    handlePhoneInput (v) {
        this.props.phone_edit(v);
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
                    {
                    this.props.error_message !== "" ?
                    <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignContent: "center", marginTop: "30px", marginBottom: "30px"}}>
                    <h1 style={{color: 'purple', margin: 'auto'}}>
                        {this.props.error_message}
                    </h1>
                    </div>
                    : 
                    <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignContent: "center", marginTop: "30px", marginBottom: "30px"}}>
                    <h1 style={{margin: 'auto'}}>
                        Welcome! 
                    </h1>
                    <h1 style={{margin: 'auto'}}>
                        We provide real time information regarding basketball courts in Northwestern Gyms!
                    </h1>
                    </div>
                    
                    }
                <Modal
                    isOpen={this.props.is_modal_open}
                    onRequestClose={() => {}}
                    contentLabel="Subscribe Modal"
                >
                    <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignContent: "center"}}>
                        <h1 style={{display: "block", margin: "auto"}}>
                            {this.props.current_gym}
                        </h1>
                        <h3 style={{display: "block", margin: "auto", marginTop: "50px"}}>
                            Subscribe to get notified when there are less people at the court!
                        </h3>
                        <TextField
                            id="phone-number"
                            label="Phone Number"
                            value={this.props.phone_number}
                            onChange={(event) => {this.handlePhoneInput(event.target.value)}}
                            margin="normal"
                            style={{marginTop: "100px"}}
                        />
                        <div style={{display: "flex", justifyContent: "center", marginTop: "30vh"}}>
                            <Button onClick={() => this.props.toggle_modal("")}>close</Button>
                            <Button onClick={this.props.subscribe}>Subscribe</Button>
                        </div>
                    </div>
               </Modal>
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
    const { current_gym, error_message, gyms, title, is_modal_open, phone_number } = main;
    return {
      ...ownProps,
      current_gym,
      is_modal_open,
      title,
      gyms,
      error_message,
      phone_number,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        request_update: (name) => {
            dispatch(thunk_request_update(name))
        },
        load_main: () => {
            dispatch(thunk_load_main())
        },
        subscribe: () => {
            dispatch(thunk_subscribe())
        },
        phone_edit: (val) => {
            dispatch(phone_edit(val))
        },
        toggle_modal: (gym) => {
            dispatch(toggle_modal(gym))
        }
    }
}

// imported actions go here
export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
