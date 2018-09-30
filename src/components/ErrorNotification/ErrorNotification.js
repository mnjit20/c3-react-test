import React from 'react'
import PropTypes from 'prop-types';
const ErrorNotification = (props) => {
    return (
        <div>
            <div className="error-msg">
                <p>Error - {props.message}</p>
            </div>
        </div>
    )
}
ErrorNotification.propTypes = {
    message: PropTypes.string.isRequired
}
export default ErrorNotification;