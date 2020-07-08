import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./Carousel.scss";
import HeaderBox from "../HeaderBox";
import shortid from "shortid";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    url:
                        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    title: "title1",
                    author: "Jane Doe",
                    category: "food"
                },
                {
                    url:
                        "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1231&q=80",
                    title: "title2",
                    author: "Jane Doe",
                    category: "food"
                },
                {
                    url:
                        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    title: "title3",
                    author: "Jane Doe",
                    category: "food"
                },
            ],
            slideIndex: 0,
        };
    }

    nextSlide = () => {
        let slideIndex = this.state.slideIndex;
        let newSlideIndex = slideIndex += 1;
        if (newSlideIndex >= this.state.slides.length) {
            newSlideIndex = 0;
        }
        this.setState({
            slideIndex: newSlideIndex,
        });
    };

    prevSlide = () => {
        let slideIndex = this.state.slideIndex;
        let newSlideIndex = slideIndex -= 1;
        console.log(newSlideIndex);
        if (newSlideIndex <= 0) {
            newSlideIndex = this.state.slides.length;
            console.log("less than 0", newSlideIndex);
        }
        this.setState({
            newSlideIndex,
        });
    };

    render() {
        return (
            <section className="carousel-wrapper">
                <div className="carousel-inner">
                    {this.state.slides.map((slide, index) => (
                        <div key={shortid.generate()} className={`item ${index === this.state.slideIndex ? "active" : ""}`}>
                            <img src={slide.url} alt="carousel" />
                        </div>
                    ))}
                </div>
                <div className="carousel-img-overlay">
                    <div className="carousel-left" onClick={() => this.prevSlide()}>
                        <i className="arrow left"></i>
                    </div>
                    <div className="carousel-center">
                        <div className="carousel-center-top">
                            <HeaderBox bgColor="#FFF" color="#000" value={this.state.slides[this.state.slideIndex].category} />
                        </div>
                        <div className="carousel-center-content">
                            <h4>{this.state.slides[this.state.slideIndex].title}</h4>
                            <p>by {this.state.slides[this.state.slideIndex].author}</p>
                        </div>
                    </div>
                    <div className="carousel-right" onClick={() => this.nextSlide()}>
                        <i className="arrow right"></i>
                    </div>
                </div>
            </section>
        );
    }
}

// Carousel.propTypes = {};

export default Carousel;
