import React from "react";
import PropTypes from "prop-types";
import HeaderBox from "../HeaderBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./MediaBox.scss";

function MediaBox(props) {
    return (
        <div className="mediabox-wrapper" style={{ width: props.width }}>
            <div className="mediabox-header">
                <img
                    src={props.image ? props.image.fields.file.url : "https://images.unsplash.com/photo-1505513699077-1c91b82a7407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
                    alt="media img"
                />
                <span className="mediabox-overlay">
                    <HeaderBox value={props.category} color="#000" bgColor="#FFF" height="28px" />
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
        </div>
    );
}

MediaBox.propTypes = {
    title: PropTypes.string,
    content: PropTypes.object,
    date: PropTypes.string,
    author: PropTypes.string
};

export default MediaBox;
