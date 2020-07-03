import React from 'react';
import PropTypes from 'prop-types';
import "./HeaderBox.scss"

function HeaderBox(props) {
    const value = props.value ? props.value : "";
    const style = {
        color: props.color,
        backgroundColor: props.bgColor,
        width: props.width,
        height: props.height
    }
    return (
        <div className="headerbox-wrapper" style={style}>
            <p>{value}</p>
        </div>
    )
}

HeaderBox.propTypes = {
    value: PropTypes.string
}

export default HeaderBox

