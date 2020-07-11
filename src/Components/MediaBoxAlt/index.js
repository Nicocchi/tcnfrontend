import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./MediaBoxAlt.scss";

function MediaBoxAlt(props) {
    return (
        <div className="mediabox-alt-wrapper" style={{ width: props.width }}>
            <div className="mediabox-alt-header">
                <span>
                    <FontAwesomeIcon icon={faCalendarAlt} size="lg" color="#ACAAAA" />
                    <p>{props.date}</p>
                </span>
            </div>
            <div className="mediabox-alt-content">
                {
                    !props.img || props.img === false ? null : <img
                    src={props.img}
                    alt="media img"
                />
                }
                
                <h4>{props.title}</h4>
            </div>
        </div>
    );
}

MediaBoxAlt.propTypes = {
    date: PropTypes.string,
    img: PropTypes.bool,
    width: PropTypes.string
};

export default MediaBoxAlt;
