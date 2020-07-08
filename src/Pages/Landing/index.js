import React, { Component } from "react";
import HeaderBox from "../../Components/HeaderBox";
import MediaBox from "../../Components/MediaBox";
import "./Landing.scss";
import MediaBoxAlt from "../../Components/MediaBoxAlt";
import Carousel from "../../Components/Carousel";
import SideNavBar from "../../Components/Navigation/SideNavBar";

export default class landing extends Component {

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
                                <MediaBox
                                    width="340px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                                <MediaBox
                                    width="340px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                                <MediaBox
                                    width="240px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                                <MediaBox
                                    width="240px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                                <MediaBox
                                    width="240px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                            </div>
                        </section>
                        <section style={{ marginTop: "40px" }}>
                            <HeaderBox value="Sports" />
                            <div className="recents-box">
                                <MediaBox
                                    width="240px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                                <MediaBox
                                    width="240px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                                <MediaBox
                                    width="240px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                            </div>
                        </section>
                        <div className="landing-columns">
                            <section style={{ marginTop: "40px" }}>
                                <HeaderBox value="Food" />
                                <div className="recents-box">
                                    <MediaBox
                                        width="100%"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content="lorum ipsum velit in a purus"
                                        author="Jane Doe"
                                        img={true}
                                    />
                                    <MediaBoxAlt
                                        width="100%"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content="lorum ipsum velit in a purus"
                                        author="Jane Doe"
                                        img={true}
                                    />
                                    <MediaBoxAlt
                                        width="100%"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content="lorum ipsum velit in a purus"
                                        author="Jane Doe"
                                        img={true}
                                    />
                                </div>
                            </section>
                            <section className="landing-entertainment" style={{ marginTop: "40px"}}>
                                <HeaderBox value="Entertainment" width="170px" />
                                <div className="recents-box">
                                    <MediaBox
                                        width="100%"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content="lorum ipsum velit in a purus"
                                        author="Jane Doe"
                                        img={true}
                                    />
                                    <MediaBoxAlt
                                        width="100%"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content="lorum ipsum velit in a purus"
                                        author="Jane Doe"
                                        img={true}
                                    />
                                    <MediaBoxAlt
                                        width="100%"
                                        date="1/01/2020"
                                        category="Sports"
                                        title="Quam risus velit in a purus nisi urna"
                                        content="lorum ipsum velit in a purus"
                                        author="Jane Doe"
                                        img={true}
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
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                                <MediaBox
                                    width="340px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                                <MediaBox
                                    width="340px"
                                    date="1/01/2020"
                                    category="Sports"
                                    title="Quam risus velit in a purus nisi urna"
                                    content="lorum ipsum velit in a purus"
                                    author="Jane Doe"
                                />
                            </div>
                        </section>
                </div>
            </div>
        );
    }
}
