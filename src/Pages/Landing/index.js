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
                                {/* <MediaBox
                                    width="340px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content={{}}
                                    author="Jane Doe"
                                /> */}
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
                                        image={this.props.policeReports[0].fields.headerImage}
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
                                        image={this.props.sportsArticles[0].fields.headerImage}
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
                                        image={this.props.foodRecipes[0].fields.headerImage}
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
                                <MediaBox
                                    width="240px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content={{}}
                                    author="Jane Doe"
                                />
                                <MediaBox
                                    width="240px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content={{}}
                                    author="Jane Doe"
                                />
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
                                                width="240px"
                                                date={utilities.formatDate(article.fields.date, "mm/dd/yyyy")}
                                                category="Sports"
                                                title={article.fields.title}
                                                content={article.fields.summary}
                                                author={article.fields.author}
                                                image={article.fields.headerImage}
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
                            <section style={{ marginTop: "40px" }}>
                                <HeaderBox value="Food" />
                                <div className="recents-box">
                                    {/* <MediaBox
                                        width="100%"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content={{}}
                                        author="Jane Doe"
                                        img={true}
                                    /> */}
                                    {this.props.foodRecipes ? (
                                    <MediaBox
                                        width="100%"
                                        date={utilities.formatDate(this.props.foodRecipes[0].fields.date, "mm/dd/yyyy")}
                                        category="Food"
                                        title={this.props.foodRecipes[0].fields.title}
                                        content={this.props.foodRecipes[0].fields.summary}
                                        author={this.props.foodRecipes[0].fields.author}
                                        image={this.props.foodRecipes[0].fields.headerImage}
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
                                                width="100%"
                                                date={utilities.formatDate(article.fields.date, "mm/dd/yyyy")}
                                                category="Food"
                                                title={article.fields.title}
                                                content={article.fields.summary}
                                                author={article.fields.author}
                                                img={article.fields.headerImage.fields.file.url}
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
                                        img={false}
                                    />
                                )}
                                </div>
                            </section>
                            <section className="landing-entertainment" style={{ marginTop: "40px" }}>
                                <HeaderBox value="Entertainment" width="170px" />
                                <div className="recents-box">
                                    <MediaBox
                                        width="100%"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content={{}}
                                        author="Jane Doe"
                                        img={false}
                                    />
                                    <MediaBoxAlt
                                        width="100%"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content={{}}
                                        author="Jane Doe"
                                        img={false}
                                    />
                                    <MediaBoxAlt
                                        width="100%"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content={{}}
                                        author="Jane Doe"
                                        img={false}
                                    />
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
                            <MediaBox
                                width="340px"
                                date="1/01/2020"
                                category="Sports"
                                title="Quam risus velit in a purus nisi urna"
                                content={{}}
                                author="Jane Doe"
                            />
                            <MediaBox
                                width="340px"
                                date="1/01/2020"
                                category="Sports"
                                title="Quam risus velit in a purus nisi urna"
                                content={{}}
                                author="Jane Doe"
                            />
                            <MediaBox
                                width="340px"
                                date="1/01/2020"
                                category="Sports"
                                title="Quam risus velit in a purus nisi urna"
                                content={{}}
                                author="Jane Doe"
                            />
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
    };
}

export default connect(mapStateToProps)(Landing);
