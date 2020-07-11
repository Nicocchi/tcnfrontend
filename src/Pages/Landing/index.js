import React, { Component } from "react";
// import { fetchPost } from "../;
import { connect } from "react-redux";
import HeaderBox from "../../Components/HeaderBox";
import MediaBox from "../../Components/MediaBox";
import "./Landing.scss";
import MediaBoxAlt from "../../Components/MediaBoxAlt";
import Carousel from "../../Components/Carousel";
import SideNavBar from "../../Components/Navigation/SideNavBar";
import utilities from "../../utilities";
import shortid from "shortid";

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="landing-wrapper">
                    <div className="landing-weather">
                        <HeaderBox value="Weather" />
                        <p className="weather-p">85°F</p>
                    </div>

                    <Carousel />
                    <div className="col-left">
                        <section style={{ marginTop: "40px" }}>
                            <HeaderBox value="Recents" />
                            <div className="recents-box">
                                {this.props.policeReports ? (
                                    <MediaBox
                                        width="340px"
                                        date={utilities.formatDate(
                                            this.props.policeReports[0].fields.date,
                                            "mm/dd/yyyy"
                                        )}
                                        category="Police"
                                        title={this.props.policeReports[0].fields.title}
                                        content={this.props.policeReports[0].fields.summary}
                                        author={this.props.policeReports[0].fields.author}
                                        image={
                                            this.props.policeReports[0].fields.headerImage
                                                ? this.props.policeReports[0].fields.headerImage.fields.file.url
                                                : "https://images.unsplash.com/photo-1557081998-05f784dcdd41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                        }
                                        link={`/police-reports/${utilities.formatDate(
                                            this.props.policeReports[0].fields.date,
                                            "yyyy/mm/dd"
                                        )}/${this.props.policeReports[0].fields.title.replace(/ /g, "-")}/#id=${
                                            this.props.policeReports[0].sys.id
                                        }`}
                                    />
                                ) : (
                                    <MediaBox
                                        width="340px"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content={{}}
                                        author="Jane Doe"
                                    />
                                )}

                                {this.props.sportsArticles ? (
                                    <MediaBox
                                        width="340px"
                                        date={utilities.formatDate(
                                            this.props.sportsArticles[0].fields.date,
                                            "mm/dd/yyyy"
                                        )}
                                        category="Sports"
                                        title={this.props.sportsArticles[0].fields.title}
                                        content={this.props.sportsArticles[0].fields.summary}
                                        author={this.props.sportsArticles[0].fields.author}
                                        image={
                                            this.props.sportsArticles[0].fields.headerImage
                                                ? this.props.sportsArticles[0].fields.headerImage.fields.file.url
                                                : "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                        }
                                        link={`/sports-articles/${utilities.formatDate(
                                            this.props.sportsArticles[0].fields.date,
                                            "yyyy/mm/dd"
                                        )}/${this.props.sportsArticles[0].fields.title.replace(/ /g, "-")}/#id=${
                                            this.props.sportsArticles[0].sys.id
                                        }`}
                                    />
                                ) : (
                                    <MediaBox
                                        width="340px"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content={{}}
                                        author="Jane Doe"
                                    />
                                )}
                                {this.props.foodRecipes ? (
                                    <MediaBox
                                        width="240px"
                                        date={utilities.formatDate(this.props.foodRecipes[0].fields.date, "mm/dd/yyyy")}
                                        category="Food"
                                        title={this.props.foodRecipes[0].fields.title}
                                        content={this.props.foodRecipes[0].fields.summary}
                                        author={this.props.foodRecipes[0].fields.author}
                                        image={
                                            this.props.foodRecipes[0].fields.headerImage
                                                ? this.props.foodRecipes[0].fields.headerImage.fields.file.url
                                                : "https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1315&q=80"
                                        }
                                        link={`/food/from-our-table-to-yours/${utilities.formatDate(
                                            this.props.foodRecipes[0].fields.date,
                                            "yyyy/mm/dd"
                                        )}/${this.props.foodRecipes[0].fields.title.replace(/ /g, "-")}/#id=${
                                            this.props.foodRecipes[0].sys.id
                                        }`}
                                    />
                                ) : (
                                    <MediaBox
                                        width="240px"
                                        date="1/01/2020"
                                        category="Food"
                                        title="Quam risus velit in a purus nisi urna"
                                        content={{}}
                                        author="Jane Doe"
                                    />
                                )}
                                {this.props.entertainmentArticles ? (
                                    <MediaBox
                                        width="240px"
                                        headerWidth="160px"
                                        date={utilities.formatDate(
                                            this.props.entertainmentArticles[0].fields.date,
                                            "mm/dd/yyyy"
                                        )}
                                        category="Entertainment"
                                        title={this.props.entertainmentArticles[0].fields.title}
                                        content={this.props.entertainmentArticles[0].fields.summary}
                                        author={this.props.entertainmentArticles[0].fields.author}
                                        image={
                                            this.props.entertainmentArticles[0].fields.headerImage
                                                ? this.props.entertainmentArticles[0].fields.headerImage.fields.file.url
                                                : "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                                        }
                                        link={`/entertainment/${utilities.formatDate(
                                            this.props.entertainmentArticles[0].fields.date,
                                            "yyyy/mm/dd"
                                        )}/${this.props.entertainmentArticles[0].fields.title.replace(/ /g, "-")}/#id=${
                                            this.props.entertainmentArticles[0].sys.id
                                        }`}
                                    />
                                ) : (
                                    <MediaBox
                                        width="240px"
                                        date="1/01/2020"
                                        category="Entertainment"
                                        title="Quam risus velit in a purus nisi urna"
                                        content={{}}
                                        author="Jane Doe"
                                    />
                                )}
                                {this.props.obituaryArticles ? (
                                    <MediaBox
                                        width="240px"
                                        headerWidth="140px"
                                        date={utilities.formatDate(
                                            this.props.obituaryArticles[0].fields.date,
                                            "mm/dd/yyyy"
                                        )}
                                        category="Obituaries"
                                        title={this.props.obituaryArticles[0].fields.title}
                                        content={this.props.obituaryArticles[0].fields.summary}
                                        author={this.props.obituaryArticles[0].fields.author}
                                        image={
                                            this.props.obituaryArticles[0].fields.headerImage
                                                ? this.props.obituaryArticles[0].fields.headerImage.fields.file.url
                                                : "https://images.unsplash.com/photo-1527311257265-eb6c944f8c63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                        }
                                        link={`/entertainment/${utilities.formatDate(
                                            this.props.obituaryArticles[0].fields.date,
                                            "yyyy/mm/dd"
                                        )}/${this.props.obituaryArticles[0].fields.title.replace(/ /g, "-")}/#id=${
                                            this.props.obituaryArticles[0].sys.id
                                        }`}
                                    />
                                ) : (
                                    <MediaBox
                                        width="240px"
                                        date="1/01/2020"
                                        category="Entertainment"
                                        title="Quam risus velit in a purus nisi urna"
                                        content={{}}
                                        author="Jane Doe"
                                    />
                                )}
                            </div>
                        </section>
                        <section style={{ marginTop: "40px" }}>
                            <HeaderBox value="Sports" />
                            <div className="recents-box">
                                {this.props.sportsArticles ? (
                                    this.props.sportsArticles
                                        .slice(0, 3)
                                        .map((article) => (
                                            <MediaBox
                                                key={shortid.generate()}
                                                width="240px"
                                                date={utilities.formatDate(article.fields.date, "mm/dd/yyyy")}
                                                category="Sports"
                                                title={article.fields.title}
                                                content={article.fields.summary}
                                                author={article.fields.author}
                                                image={
                                                    article.fields.headerImage
                                                        ? article.fields.headerImage.fields.file.url
                                                        : "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                                }
                                                link={`/sports-articles/${utilities.formatDate(
                                                    article.fields.date,
                                                    "yyyy/mm/dd"
                                                )}/${article.fields.title.replace(/ /g, "-")}/#id=${article.sys.id}`}
                                            />
                                        ))
                                ) : (
                                    <MediaBox
                                        width="240px"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content={{}}
                                        author="Jane Doe"
                                    />
                                )}
                            </div>
                        </section>
                        <div className="landing-columns">
                            <section className="landing-food" style={{ marginTop: "40px" }}>
                                <HeaderBox value="Food" />
                                <div className="recents-box">
                                    {this.props.foodRecipes ? (
                                        <MediaBox
                                            width="100%"
                                            date={utilities.formatDate(
                                                this.props.foodRecipes[0].fields.date,
                                                "mm/dd/yyyy"
                                            )}
                                            category="Food"
                                            title={this.props.foodRecipes[0].fields.title}
                                            content={this.props.foodRecipes[0].fields.summary}
                                            author={this.props.foodRecipes[0].fields.author}
                                            image={
                                                this.props.foodRecipes[0].fields.headerImage
                                                    ? this.props.foodRecipes[0].fields.headerImage.fields.file.url
                                                    : "https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1315&q=80"
                                            }
                                            link={`/food/from-our-table-to-yours/${utilities.formatDate(
                                                this.props.foodRecipes[0].fields.date,
                                                "yyyy/mm/dd"
                                            )}/${this.props.foodRecipes[0].fields.title.replace(/ /g, "-")}/#id=${
                                                this.props.foodRecipes[0].sys.id
                                            }`}
                                        />
                                    ) : (
                                        <MediaBox
                                            width="100%"
                                            date="1/01/2020"
                                            category="Food"
                                            title="Quam risus velit in a purus nisi urna"
                                            content={{}}
                                            author="Jane Doe"
                                        />
                                    )}
                                    {this.props.foodRecipes ? (
                                        this.props.foodRecipes
                                            .slice(1, 3)
                                            .map((article) => (
                                                <MediaBoxAlt
                                                    key={shortid.generate()}
                                                    width="100%"
                                                    date={utilities.formatDate(article.fields.date, "mm/dd/yyyy")}
                                                    category="Food"
                                                    title={article.fields.title}
                                                    content={article.fields.summary}
                                                    author={article.fields.author}
                                                    img={
                                                        article.fields.headerImage
                                                            ? article.fields.headerImage.fields.file.url
                                                            : false
                                                    }
                                                    link={`/food/from-our-table-to-yours/${utilities.formatDate(
                                                        article.fields.date,
                                                        "yyyy/mm/dd"
                                                    )}/${article.fields.title.replace(/ /g, "-")}/#id=${
                                                        article.sys.id
                                                    }`}
                                                />
                                            ))
                                    ) : (
                                        <MediaBoxAlt
                                            width="240px"
                                            date="1/01/2020"
                                            category="Sports"
                                            title="Quam risus velit in a purus nisi urna"
                                            content={{}}
                                            author="Jane Doe"
                                            img={'false'}
                                        />
                                    )}
                                </div>
                            </section>
                            <section className="landing-entertainment" style={{ marginTop: "40px" }}>
                                <HeaderBox value="Entertainment" width="170px" />
                                <div className="recents-box">
                                    {this.props.entertainmentArticles ? (
                                        <MediaBox
                                            width="100%"
                                            headerWidth="200px"
                                            date={utilities.formatDate(
                                                this.props.entertainmentArticles[0].fields.date,
                                                "mm/dd/yyyy"
                                            )}
                                            category="Entertainment"
                                            title={this.props.entertainmentArticles[0].fields.title}
                                            content={this.props.entertainmentArticles[0].fields.summary}
                                            author={this.props.entertainmentArticles[0].fields.author}
                                            image={
                                                this.props.entertainmentArticles[0].fields.headerImage
                                                    ? this.props.entertainmentArticles[0].fields.headerImage.fields.file.url
                                                    : "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                                            }
                                            link={`/entertainment/${utilities.formatDate(
                                                this.props.entertainmentArticles[0].fields.date,
                                                "yyyy/mm/dd"
                                            )}/${this.props.entertainmentArticles[0].fields.title.replace(
                                                / /g,
                                                "-"
                                            )}/#id=${this.props.entertainmentArticles[0].sys.id}`}
                                        />
                                    ) : (
                                        <MediaBox
                                            width="100%"
                                            date="1/01/2020"
                                            category="Food"
                                            title="Quam risus velit in a purus nisi urna"
                                            content={{}}
                                            author="Jane Doe"
                                        />
                                    )}
                                    {this.props.entertainmentArticles ? (
                                        this.props.entertainmentArticles
                                            .slice(1, 3)
                                            .map((article) => (
                                                <MediaBoxAlt
                                                    key={shortid.generate()}
                                                    width="100%"
                                                    date={utilities.formatDate(article.fields.date, "mm/dd/yyyy")}
                                                    category="Entertainment"
                                                    title={article.fields.title}
                                                    content={article.fields.summary}
                                                    author={article.fields.author}
                                                    img={
                                                        article.fields.headerImage
                                                            ? article.fields.headerImage.fields.file.url
                                                            : 'false'
                                                    }
                                                    link={`/entertainment/${utilities.formatDate(
                                                        article.fields.date,
                                                        "yyyy/mm/dd"
                                                    )}/${article.fields.title.replace(/ /g, "-")}/#id=${
                                                        article.sys.id
                                                    }`}
                                                />
                                            ))
                                    ) : (
                                        <MediaBoxAlt
                                            width="240px"
                                            date="1/01/2020"
                                            category="Sports"
                                            title="Quam risus velit in a purus nisi urna"
                                            content={{}}
                                            author="Jane Doe"
                                            img={'false'}
                                        />
                                    )}
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="col-right">
                        <SideNavBar />
                    </div>
                </div>
                <div className="landing-bottom">
                    <section className="afront">
                        <HeaderBox value="A:Front" bgColor="#FFF" color="#000" />
                        <div className="recents-box-alt">
                        {this.props.aFront ? (
                                this.props.aFront
                                    .slice(0, 3)
                                    .map((article) => (
                                        <MediaBox
                                            key={shortid.generate()}
                                            width="340px"
                                            color="#FFF"
                                            date={utilities.formatDate(article.fields.date, "mm/dd/yyyy")}
                                            category="A:Front"
                                            title={article.fields.title}
                                            content={article.fields.summary}
                                            author={article.fields.author}
                                            image={
                                                article.fields.headerImage
                                                    ? article.fields.headerImage.fields.file.url
                                                    : 'false'
                                            }
                                            link={`/epopulate/${utilities.formatDate(
                                                article.fields.date,
                                                "yyyy/mm/dd"
                                            )}/${article.fields.title.replace(/ /g, "-")}/#id=${article.sys.id}`}
                                        />
                                    ))
                            ) : (
                                <MediaBox
                                    width="340px"
                                    date="1/01/2020"
                                    category="A:Front"
                                    title="Quam risus velit in a purus nisi urna"
                                    content={{}}
                                    author="Jane Doe"
                                    img={"false"}
                                />
                            )}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        policeReports: state.rootReducer.policeReports,
        sportsArticles: state.rootReducer.sportsArticles,
        foodRecipes: state.rootReducer.foodRecipes,
        entertainmentArticles: state.rootReducer.entertainmentArticles,
        obituaryArticles: state.rootReducer.obituaryArticles,
        aFront: state.rootReducer.aFront
    };
}

export default connect(mapStateToProps)(Landing);
