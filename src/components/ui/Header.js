import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Typography } from '@material-ui/core';

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

function Header(props) {
    return (
        // enclose existing jsx into Elevation component to allow that affect
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h3" >
                        Arc Development
                    </Typography>

                </Toolbar>
            </AppBar>
        </ElevationScroll>

    );
}

export default Header;