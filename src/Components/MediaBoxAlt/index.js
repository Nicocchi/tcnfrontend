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
                    props.img === false || !props.img ? null : <img
                    src="https://images.unsplash.com/photo-1505513699077-1c91b82a7407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
