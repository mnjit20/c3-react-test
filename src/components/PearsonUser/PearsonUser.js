import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LazyLoad from 'react-lazyload';
export default (props) => {

    return (
        <Fragment>
            <li> <div>
                <LazyLoad height={1}>
                    <img src={props.user.avatar} alt={props.user.first_name + ' ' + props.user.last_name + ' image'} />
                </LazyLoad>
                <h3>{props.user.first_name + ' ' + props.user.last_name}</h3>
                <a onClick={props.removeUser}>Delete</a>
            </div>
            </li>
        </Fragment >

    )
}
