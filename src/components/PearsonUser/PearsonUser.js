import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default (props) => {
    console.log(props.user);
    return (
        <Fragment>
            <li> <div>
                <img src={props.user.avatar} alt={props.user.first_name + ' ' + props.user.last_name + ' image'} />
                <h3>{props.user.first_name + ' ' + props.user.last_name}</h3>
                <a>Delete</a>
            </div>
            </li>

        </Fragment>

    )
}
