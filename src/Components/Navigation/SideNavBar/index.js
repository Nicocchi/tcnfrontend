import React, { Component } from "react";
// import PropTypes from "prop-types";
import HeaderBox from "../../HeaderBox";
import "./SideNavBar.scss";
import MediaBoxAlt from "../../MediaBoxAlt";
import { connect } from "react-redux";
import shortid from "shortid";
import utilities from "../../../utilities";

class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poll: {
                question: "Ante nulla in ut quis. Risus nisl scelerisque duis ultrices in morbi pretium in eget.",
                answers: ["Yes", "No", "Maybe", "I don't understand"],
            },
            pollAnswer: 0,
        };
    }

    handleCheck = (value) => {
        this.setState({
            pollAnswer: value,
        });
    };

    render() {
        return (
            <div className="sidenavbar-wrapper">
                <section style={{ marginTop: "40px" }}>
                    <HeaderBox value="Find us on Facebook" width="230px" />
                    <div className="sidenavbar-section" style={{ height: "188px" }}>
                        <iframe
                            title="Facebook Plugin"
                            src="http://www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/troupcountynews&amp;width=300&amp;height=250&amp;colorscheme=light&amp;show_faces=true&amp;header=false&amp;stream=false&amp;show_border=false"
                            scrolling="no"
                            style={{ border: "none", overflow: "hidden", width: "100%", height: "250px" }}
                            allowtransparency="true"
                            frameBorder="0"
                        ></iframe>
                    </div>
                </section>
                <section style={{ marginTop: "40px" }}>
                    <HeaderBox value="Poll" width="140px" />
                    <div className="sidenavbar-section poll">
                        <h3>What Do You Think?</h3>
                        <p>{this.state.poll.question}</p>
                        {this.state.poll.answers.map((ans, index) => (
                            <label key={shortid.generate()} className="container">
                                {ans}
                                <input
                                    type="radio"
                                    onChange={() => this.handleCheck(index)}
                                    checked={this.state.pollAnswer === index ? true : false}
                                    name="radio"
                                />
                                <span className="checkmark"></span>
                            </label>
                        ))}
                    </div>
                </section>
                <section style={{ marginTop: "40px" }}>
                    <HeaderBox value="Obituaries" width="140px" />
                    <div className="sidenavbar-section poll">
                        {this.props.obituaryArticles ? (
                            this.props.obituaryArticles
                                .slice(0, 5)
                                .map((article) => (
                                    <MediaBoxAlt
                                        key={shortid.generate()}
                                        width="100%"
                                        date={utilities.formatDate(article.fields.date, "mm dd, yyyy")}
                                        title={article.fields.title}
                                        img={"false"}
                                        link={`/obituaries/${utilities.formatDate(
                                            article.fields.date,
                                            "yyyy/mm/dd"
                                        )}/${article.fields.title.replace(/ /g, "-")}/#id=${article.sys.id}`}
                                    />
                                ))
                        ) : (
                            <MediaBoxAlt width="100%" title="Quam risus velit in a purus nisi urna" img={"false"} />
                        )}
                    </div>
                </section>
                <section style={{ marginTop: "40px" }}>
                    <HeaderBox value="E-Edition" width="140px" />
                    <div className="sidenavbar-section poll">
                        <img src="/images/getprima.jpg" alt="e-edition" />
                    </div>
                </section>
            </div>
        );
    }
}

// SideNavBar.propTypes = {};

function mapStateToProps(state) {
    return { obituaryArticles: state.rootReducer.obituaryArticles };
}

export default connect(mapStateToProps)(SideNavBar);
