import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";

export default function ArticleBox(props) {
    const date = new Date(props.article.fields.date);
    const dd = date.getDate();
    const mm = date.toLocaleString("default", { month: "long" });
    const mmd = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    console.log(props);

    return (
        <div style={{ marginTop: "20px", marginBottom: "20px", borderBottom: "1px solid #EEEEEE" }}>
            <Link style={{color: "#000"}} to={`/police-reports/${yyyy}/${mmd}/${dd}/${props.article.fields.title}/#id=${props.article.sys.id}`}>
                <h2>{props.article.fields.title}</h2>
            </Link>
            <p>
                {mm} {dd}, {yyyy}
            </p>
            {documentToReactComponents(props.article.fields.summary)}
            <Link to={`/police-reports/${yyyy}/${mmd}/${dd}/${props.article.fields.title}/#id=${props.article.sys.id}`}>
                <button style={{marginBottom: "20px"}}>Read more</button>
            </Link>
        </div>
    );
}
