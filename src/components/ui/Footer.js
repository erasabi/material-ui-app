import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    footer: {
        position: "fixed",
        bottom: 0,
        backgroundColor: theme.palette.common.blue,
        width: "100%",
    }

}))

export default function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Grid container spacing={2}>
                <Grid container item xs={6}>
                    Title1
                </Grid>
                <Grid container item xs={6}>
                    Title2
                </Grid>
            </Grid>
        </footer>
    );
}