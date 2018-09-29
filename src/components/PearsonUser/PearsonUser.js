import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default (props) => {
    console.log(props.user);
    let imageUrl = props.user.avatar + '?' + Math.floor((Math.random() * 9000) + 1);

    return (
        <Fragment>
            <li> <div>

                <img src={imageUrl} alt={props.user.first_name + ' ' + props.user.last_name + ' image'} />
                <h3>{props.user.first_name + ' ' + props.user.last_name}</h3>
                <a onClick={props.removeUser}>Delete</a>
            </div>
            </li>
        </Fragment>

    )
}
