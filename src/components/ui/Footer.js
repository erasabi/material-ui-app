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
            {/* container:
                - will take all available width
                - good when you want to control:
                    top-grid: spacing
                    other: direction
            item: 
                - will only take space needed
                - place outside rows/cols to control space taken */}

            {/* Top Grid:
                - best to only specify spacing here
             */}
            <Grid container>
                {/* item: used to keep container from taking full width */}
                <Grid item>
                    {/* container with direction: controls enclosed items to display as col/row */}
                    <Grid container direction="column">
                        <Grid item>Col1 Row1</Grid>
                        <Grid item>Col1 Row2</Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>Col2 Row1</Grid>
                        <Grid item>Col2 Row2</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    );
}