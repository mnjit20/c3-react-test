import React from 'react'
import PropTypes from 'prop-types';
import SortButton from '../../assets/img/sort3.png';

const SortableButton = (props) => {
    return (
        <div>
            <div className="sort">
                <img onClick={props.sort} src={SortButton} alt="sort button"></img>
                <p onClick={props.sort}>Sort : {props.sortStatus ? 'Z-A' : 'A-Z'}</p>
            </div>
        </div>
    )
}

SortableButton.propTypes = {
    sort: PropTypes.func.isRequired,
    sortStatus: PropTypes.bool.isRequired
}
export default SortableButton;
