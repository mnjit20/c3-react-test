import React from 'react'
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
const PearsonUser = (props) => {
    return (
        <li> <div>
            <LazyLoad height={1}>
                <img src={props.user.avatar} alt={props.user.first_name + ' ' + props.user.last_name + ' image'} />
            </LazyLoad>
            <h3>{props.user.first_name + ' ' + props.user.last_name}</h3>
            <a onClick={props.removeUser}>Delete</a>
        </div>
        </li>
    )
}

// defined proptypes for the component
PearsonUser.propTypes = {
    user: PropTypes.object.isRequired,
    removeUser: PropTypes.func.isRequired,
};


export default PearsonUser;

