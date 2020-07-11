import React from "react";
import PropTypes from "prop-types";
import HeaderBox from "../HeaderBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {NavLink} from "react-router-dom";
import "./MediaBox.scss";

function MediaBox(props) {
    return (
        // <div className="mediabox-wrapper" style={{ width: props.width }}>
        <NavLink to={props.link ? props.link : "/"} className="mediabox-wrapper" style={{ width: props.width, color: props.color ? props.color : "#000" }}>
            
            <div className="mediabox-header" style={{backgroundColor: props.image ? "#FFF" : "#ececec", height: props.image ? "auto" : "200px", width: "100%" }}>
                <img
                    src={props.image}
                    alt="media img"
                />
                <span className="mediabox-overlay">
                    <HeaderBox value={props.category} color="#000" bgColor="#FFF" height="28px" width={props.headerWidth} />
                </span>
            </div>
            <div className="mediabox-content">
                <span>
                    <FontAwesomeIcon icon={faCalendarAlt} size="lg" color="#ACAAAA" />
                    <p>{props.date}</p>
                </span>
                <h4>{props.title}</h4>
                <div className="clipped" style={{height: "100px"}}>
                {typeof props.content !== 'object' || Object.keys(props.content).length === 0 ? <p>""</p> : documentToReactComponents(props.content)}
                </div>
            </div>
            <div className="mediabox-footer">
                <h5>{props.author}</h5>
                <h5>More</h5>
            </div>
            </NavLink>
    );
}

MediaBox.propTypes = {
    title: PropTypes.string,
    content: PropTypes.object,
    date: PropTypes.string,
    author: PropTypes.string
};

export default MediaBox;
