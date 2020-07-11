import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import "./ArticleBox.scss";
// import { options } from "./options";

export default function ArticleBox(props) {
    const date = new Date(props.article.fields.date);
    const dd = date.getDate();
    const mm = date.toLocaleString("default", { month: "long" });
    const mmd = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    console.log("AB", props.article)
    return (
        <div className="article-box-wrapper">
            <Link
                style={{ color: "#000" }}
                to={`/${props.category}/${yyyy}/${mmd}/${dd}/${props.article.fields.title.replace(/ /g, "-")}/#id=${props.article.sys.id}`}
            >
                <h2>{props.article.fields.title}</h2>
            </Link>
            <p>
                {mm} {dd}, {yyyy}
            </p>
            <div className="article-box-content clipped" style={{maxHeight: "200px"}}>
                {props.article.fields.headerImage ? (
                    <img
                        src={props.article.fields.headerImage.fields.file.url}
                        alt={props.article.fields.headerImage.fields.file.title}
                    />
                ) : null}
                <div className="ellipsis">{documentToReactComponents(props.article.fields.summary)}</div>
            </div>
            <Link to={`/${props.category}/${yyyy}/${mmd}/${dd}/${props.article.fields.title.replace(/ /g, "-")}/#id=${props.article.sys.id}`}>
                <button style={{ marginBottom: "20px" }}>Read more</button>
            </Link>
        </div>
    );
}
