import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import "./MediaBoxAlt.scss";

function MediaBoxAlt(props) {
    return (
        <NavLink to={props.link ? props.link : "/"} className="mediabox-alt-wrapper" style={{ width: props.width, color: props.color ? props.color : "#000" }}>
            <div className="mediabox-alt-header">
                <span>
                    <FontAwesomeIcon icon={faCalendarAlt} size="lg" color="#ACAAAA" />
                    <p>{props.date}</p>
                </span>
            </div>
            <div className="mediabox-alt-content">
                {
                    !props.img || props.img === 'false' ? null : <img
                    src={props.img}
                    alt="media img"
                />
                }
                
                <h4>{props.title}</h4>
            </div>
        </NavLink>
    );
}

MediaBoxAlt.propTypes = {
    date: PropTypes.string,
    img: PropTypes.string,
    width: PropTypes.string
};

export default MediaBoxAlt;
