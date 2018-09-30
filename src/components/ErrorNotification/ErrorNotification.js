import React from 'react'

const ErrorNotification = (props) => {
    return (
        <div>
            <div className="error-msg">
                <p>Error - {props.message}</p>
            </div>
        </div>
    )
}
export default ErrorNotification;