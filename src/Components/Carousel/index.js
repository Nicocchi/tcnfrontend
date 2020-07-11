import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./Carousel.scss";
import HeaderBox from "../HeaderBox";
import shortid from "shortid";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import utilities from "../../utilities";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
            slideIndex: 0,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.aFront !== this.props.aFront) {
            this.setState({
                slides: this.props.aFront,
            }, () => this.startSlideshow());
        }
    }

    startSlideshow = () => {
        setTimeout(() => {
            this.nextSlide();
            this.startSlideshow();
        }, 3000)
    }

    nextSlide = () => {
        let slideIndex = this.state.slideIndex;
        let newSlideIndex = (slideIndex += 1);
        if (newSlideIndex >= this.state.slides.length) {
            newSlideIndex = 0;
        }
        this.setState({
            slideIndex: newSlideIndex,
        });
    };

    prevSlide = () => {
        let slideIndex = this.state.slideIndex;
        let newSlideIndex = (slideIndex -= 1);
        if (newSlideIndex < 0) {
            newSlideIndex = this.state.slides.length - 1;
        }
        this.setState({
            slideIndex: newSlideIndex,
        });
    };

    render() {
        if (this.state.slides.length <= 0) {
            return (
                <section className="carousel-wrapper" style={{background: "#ececec"}}>
                    <div className="carousel-inner">
                        <div key={shortid.generate()} className={`item active`}>
                        </div>
                    </div>
                    <div className="carousel-img-overlay">
                        <div className="carousel-left" onClick={() => this.prevSlide()}>
                            <i className="arrow left"></i>
                        </div>
                        <div className="carousel-center">
                            <div className="carousel-center-top">
                                <HeaderBox bgColor="#FFF" color="#000" value="A:Front" />
                            </div>
                            <div className="carousel-center-content">
                                
                            </div>
                        </div>
                        <div className="carousel-right" onClick={() => this.nextSlide()}>
                            <i className="arrow right"></i>
                        </div>
                    </div>
                </section>
            );
        }
        return (
            <section className="carousel-wrapper">
                <div className="carousel-inner">
                    {this.state.slides.map((slide, index) => (
                        <div
                            key={shortid.generate()}
                            className={`item ${index === this.state.slideIndex ? "active" : ""}`}
                        >
                            <img
                                src={
                                    slide.fields.headerImage
                                        ? slide.fields.headerImage.fields.file.url
                                        : "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                }
                                alt="carousel"
                            />
                        </div>
                    ))}
                </div>
                <div className="carousel-img-overlay">
                    <div className="carousel-left" onClick={() => this.prevSlide()}>
                        <i className="arrow left"></i>
                    </div>
                    <NavLink
                        to={`/epopulate/${utilities.formatDate(
                            this.state.slides[this.state.slideIndex].fields.date,
                            "yyyy/mm/dd"
                        )}/${this.state.slides[this.state.slideIndex].fields.title.replace(/ /g, "-")}/#id=${
                            this.state.slides[this.state.slideIndex].sys.id
                        }`}
                        className="carousel-center"
                    >
                        <div className="carousel-center-top">
                            <HeaderBox bgColor="#FFF" color="#000" value="A:Front" />
                        </div>
                        <div className="carousel-center-content">
                            <h4>{this.state.slides[this.state.slideIndex].fields.title}</h4>
                            {this.state.slides[this.state.slideIndex].fields.author ? (
                                <p>by {this.state.slides[this.state.slideIndex].fields.author}</p>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </NavLink>
                    <div className="carousel-right" onClick={() => this.nextSlide()}>
                        <i className="arrow right"></i>
                    </div>
                </div>
            </section>
        );
    }
}

// Carousel.propTypes = {};

function mapStateToProps(state) {
    return {
        policeReports: state.rootReducer.policeReports,
        sportsArticles: state.rootReducer.sportsArticles,
        foodRecipes: state.rootReducer.foodRecipes,
        entertainmentArticles: state.rootReducer.entertainmentArticles,
        obituaryArticles: state.rootReducer.obituaryArticles,
        aFront: state.rootReducer.aFront,
    };
}

export default connect(mapStateToProps)(Carousel);
