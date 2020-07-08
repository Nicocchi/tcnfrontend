import React from "react";
import PropTypes from "prop-types";
import "./ArticlesView.scss";
import SideNavBar from "../../Components/Navigation/SideNavBar";
import ArticleBox from "../../Components/ArticleBox";
import shortid from "shortid";

function ArticlesView(props) {
    const articles = props.articles ? props.articles.slice().sort(((a, b) => new Date(b.fields.date) - new Date(a.fields.date))) : null;
    console.log(props);
    return (
        <div className="articles-wrapper">
            <div className="col-left-articles">
                <div className="articles-header">
                    <h1>{props.title}</h1>
                </div>
                <section className="articlesview-section">
                    <div className="articles-box">
                        {articles.map((art) => <ArticleBox history={props.history} key={shortid.generate()} article={art} />)}
                    </div>
                </section>
            </div>
            <div className="col-right-articles">
                <SideNavBar />
            </div>
        </div>
    );
}

ArticlesView.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.arrayOf(PropTypes.object),
};

export default ArticlesView;
