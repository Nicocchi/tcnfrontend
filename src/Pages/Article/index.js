import React, { Component } from "react";
// import PropTypes from 'prop-types'
import queryString from "query-string";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SideNavBar from "../../Components/Navigation/SideNavBar";

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null,
        };
    }

    componentDidMount() {
        if (this.props.location.hash !== "") {
            const values = queryString.parse(this.props.location.hash);
            const contentful = require("contentful");

            const client = contentful.createClient({
                space: process.env.REACT_APP_CMS_PROD_SPACE_ID,
                environment: "master", // defaults to 'master' if not set
                accessToken: process.env.REACT_APP_CMS_PROD_ACCESS_TOKEN,
            });

            client
                .getEntry(values.id)
                .then((response) => {
                    this.setState({ article: response });
                })
                .catch((err) => console.log("FETCH ERROR"));
        }
    }

    render() {
        if (!this.state.article) return <div></div>;

        const date = new Date(this.state.article.fields.date);
        const dd = date.getDate();
        const mm = date.toLocaleString("default", { month: "long" });
        const yyyy = date.getFullYear();

        return (
            <div className="articles-wrapper">
                <div className="col-left-articles">
                    <div className="articles-header">
                        <h1>{this.state.article.fields.title}</h1>
                    </div>
                    <section className="articlesview-section">
                        <p>
                            {mm} {dd}, {yyyy}
                        </p>
                        <div className="articles-box">
                            {documentToReactComponents(this.state.article.fields.content)}
                        </div>
                    </section>
                </div>
                <div className="col-right-articles">
                    <SideNavBar />
                </div>
            </div>
        );
    }
}
