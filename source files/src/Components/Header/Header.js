import React from 'react';
import Fab from "@material-ui/core/Fab/index";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';

import './Header.css';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function Header(props) {
    const { classes } = props;
    return (
        <div className="header">
            <h1 className="headerHeading">Corporate Wellness</h1>
            <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.margin}
                style={{backgroundColor: '#2196f3'}}
            >
                Get Connected
            </Fab>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
