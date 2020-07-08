import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import ArticlesView from '../ArticlesView';

export default class PoliceReports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        const contentful = require("contentful");

		const client = contentful.createClient({
			space: process.env.REACT_APP_CMS_PROD_SPACE_ID,
			environment: "master", // defaults to 'master' if not set
			accessToken: process.env.REACT_APP_CMS_PROD_ACCESS_TOKEN
		});

		client
			.getEntries({ include: 5, limit: 900 })
			.then(response => {
                let articles = [];
				response.items.forEach((entry, index) => {
					if (entry.sys.contentType.sys.id === "policeReport") articles.push(entry);
                });
                
				this.setState({articles: articles })
			})
			.catch(err => console.log("FETCH ERROR"));
    }

    render() {
        return (
            <div>
                <ArticlesView articles={this.state.articles} title="Police Reports" />
            </div>
        )
    }
}

// PoliceReports.propTypes = {

// }