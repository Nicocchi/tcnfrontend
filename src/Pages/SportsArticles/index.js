import React, { Component } from "react";
// import PropTypes from 'prop-types'
import ArticlesView from "../ArticlesView";
var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
export default class SportsArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: null,
            maxArticleCount: 5,
            currentIndex: 0,
            maxPages: 0,
            pageNeighbours: 2,
            pageOfItems: [],
            exampleItems: exampleItems,
        };
    }

    componentDidMount() {
        const contentful = require("contentful");

        const client = contentful.createClient({
            space: process.env.REACT_APP_CMS_PROD_SPACE_ID,
            environment: "master", // defaults to 'master' if not set
            accessToken: process.env.REACT_APP_CMS_PROD_ACCESS_TOKEN,
        });

        client
            .getEntries({ include: 5, limit: 900})
            .then((response) => {
                let articles = [];
                response.items.forEach((entry, index) => {
                    if (entry.sys.contentType.sys.id === "sportsArticle") articles.push(entry);
                });
                let newArticles = articles.slice().sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
                this.setState({
                    articles: newArticles,
                    maxArticleCount: articles.length
                });
            })
            .catch((err) => console.log("FETCH ERROR", err));
    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    changePage = (number) => {
        console.log("NUM", number);
        this.setState({
            currentIndex: number - 1
        })
    };

    render() {
        return (
            <div>
                <ArticlesView
                    exampleItems={this.state.exampleItems}
                    pageOfItems={this.state.pageOfItems}
                    onChangePage={this.onChangePage}
                    pageNeighbours={this.state.pageNeighbours}
                    changePage={this.changePage}
                    articles={this.state.articles}
                    maxPages={this.state.maxPages}
                    maxArticleCount={this.state.maxArticleCount}
                    title="Sports Articles"
                    currentIndex={this.state.currentIndex}
                    category="sports-articles"
                />
            </div>
        );
    }
}

// SportsArticles.propTypes = {

// }