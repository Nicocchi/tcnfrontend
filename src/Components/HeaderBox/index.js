import React from 'react';
import PropTypes from 'prop-types';
import "./HeaderBox.scss"

function HeaderBox(props) {
    const value = props.value ? props.value : "";
    return (
        <div class="headerbox-wrapper">
            <p>{value}</p>
        </div>
    )
}

HeaderBox.propTypes = {
    value: PropTypes.string
}

export default HeaderBox

