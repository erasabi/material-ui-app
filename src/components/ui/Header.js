import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core';
import logo from '../../media/logo.svg';
import { Tabs, Tab } from '@material-ui/core';

function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        // when true this disables a small delay when scrolling
        disableHysteresis: true,
        // controls how far the user needs to scroll before scrolling is triggered
        threshold: 0
    });

    return React.cloneElement(children, {
        // determines how far to move the scroll whenever scrolling is triggered
        elevation: trigger ? 4 : 0,
    });
}

// access the existing Default Theme style props in theme.mixings.toolbar
// this lets us take the margin values from the default style 

// makeStyles is a function that takes in JSS (so react CSS) object and 
// returns css style to pass on to component className=<here>
const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        // since theme is passed in App ThemeProvider
        // passing it to make styles allows us to access it 
        // and add theme styles to useStyles classes we build
        ...theme.mixins.toolbar,
        // so that content does not get covered by header
        marginBottom: "3em"
    },
    logo: {
        // em is a unit of size that is responsive by nature
        height: '5em'
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        textTransform: "none",
        fontWeight: 400,
        fontSize: "1rem"
    }
}))

function Header(props) {
    const classes = useStyles();
    return (
        // add to treate below components as if they were wrapped
        <React.Fragment>
            {/* enclose existing jsx into Elevation component to allow that affect */}
            <ElevationScroll>
                <AppBar position="fixed">
                    {/* disableGutters removes any padding associated w/Toolbar */}
                    <Toolbar disableGutters={true}>
                        <img alt="appbar logo" className={classes.logo} src={logo} />
                        Arc Development
                        <Tabs className={classes.tabContainer} value={0}>
                            <Tab className={classes.tab} label="Home"></Tab>
                            <Tab className={classes.tab} label="Services"></Tab>
                            <Tab className={classes.tab} label="The Revolution"></Tab>
                            <Tab className={classes.tab} label="About Us"></Tab>
                            <Tab className={classes.tab} label="Contact Us"></Tab>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* now overall HEADER component will have toolbarMargin props */}
            <div className={classes.toolbarMargin} />       
        </React.Fragment>
    );
}

export default Header;