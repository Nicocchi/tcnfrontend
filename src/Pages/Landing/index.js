import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderBox from "../../Components/HeaderBox";
import MediaBox from "../../Components/MediaBox";
import "./Landing.scss";
import MediaBoxAlt from "../../Components/MediaBoxAlt";
import Carousel from "../../Components/Carousel";
import SideNavBar from "../../Components/Navigation/SideNavBar";

export default class landing extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <div>
                <div className="landing-wrapper">
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
                            <section style={{ marginTop: "40px", marginLeft: "30px" }}>
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
