import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default (props) => {
    return (
        <Grid item xs={3}>
            <Paper className={props.class}>{props.userData.first_name + ' ' + props.userData.last_name}</Paper>
        </Grid>
    )
}
