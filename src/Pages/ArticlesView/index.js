import React from "react";
import PropTypes from "prop-types";
import "./ArticlesView.scss";
import SideNavBar from "../../Components/Navigation/SideNavBar";
import ArticleBox from "../../Components/ArticleBox";
import shortid from "shortid";
import Pagination from "../../Components/Pagination"

Array.prototype.chunk = function (chunk_size) {
    var temp = this.slice(0),
        results = [];
      
    while (temp.length) {
      results.push(temp.splice(0, chunk_size));
    }
  
    return results;
};

function ArticlesView(props) {
    if (!props.articles) return <div></div>;
    const articles = props.articles;

    return (
        <div className="articles-wrapper">
            <div className="col-left-articles">
                <div className="articles-header">
                    <h1>{props.title}</h1>
                </div>
                <section className="articlesview-section">
                    <div className="articles-box">
                    {props.pageOfItems.map(item =>
                            <ArticleBox history={props.history} key={shortid.generate()} article={item} />
                        )}
                    </div>
                    <div className="articles-pagebar">
                    <Pagination items={props.articles} onChangePage={props.onChangePage} />

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
    length: PropTypes.number,
};

export default ArticlesView;
