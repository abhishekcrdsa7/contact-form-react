import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Fab from "@material-ui/core/Fab";
import uniqid from 'uniqid';

import './UserForm.css';
import database from '../../init-firebase';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: ''};
        this.classes = this.props.classes;
        this.generateTextField.bind(this);
    }

    //show a message on successful data add to firebase
    showSuccessAlert(me) {
        let a = me;
        let i = 0;
        let inId = setInterval(function() {
            let e = document.querySelector('#alert');
            e.innerText = a.substring(0,i);
            i++;
            if(e.innerText === a) {
                clearInterval(inId);
                setTimeout(function() {
                    let clId = setInterval(function() {
                        i--;
                        e.innerText = a.substring(0, i);
                        if(e.innerText === "") {
                            clearInterval(clId);
                        }
                    }, 8)
                }, 2000)
            }
        }, 8);
    }

    //show the message in case of error
    showErrorAlert(me) {
        let e = document.querySelector('#alert');
        e.innerText = me;
    }

    //store the data in the firebase on submitting the form
    submitForm(event) {
        event.preventDefault();
        database
            .ref(`users/${uniqid()}`)
            .set(this.state)
            .then(() => {
                this.setState({name: '', email: ''});
                this.showSuccessAlert("**Thank you for submitting your details!");
            })
            .catch((err) => {
                this.showErrorAlert("**There was an error. Please try again.");
            });
    }

    //generate the text field for the name and the email inputs
    generateTextField(k, t) {
        return (
            <TextField
            id="standard-dense"
            label={k.charAt(0).toUpperCase()+k.substring(1)}
            className={classNames(this.classes.textField, this.classes.dense)}
            margin="dense"
            required
            autoComplete="off"
            value={this.state[k]}
            onInput={(event) => {this.setState({...this.state,[k]: event.target.value })}}
            type={ t || "" }
        />
        );
    }

    render() {
        return (
            <div>
                <h2 id="formName">Contact Us</h2>
                    <p id="message" style={{marginBottom: 'unset'}}><strong id="alert"/></p>
                <div className="formDiv" style={{ textAlign: 'center' }}>
                    <form className="userForm" onSubmit={this.submitForm.bind(this)}>
                        <div className="fromField">
                            {this.generateTextField("name")}
                        </div>
                        <div className="fromField">
                            {this.generateTextField("email", "email")}
                        </div>
                        <div>
                            <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                aria-label="Add"
                                className={this.classes.margin}
                                style={{backgroundColor: '#2196f3'}}
                                type="submit"
                            >
                                Submit
                            </Fab>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

UserForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserForm);
