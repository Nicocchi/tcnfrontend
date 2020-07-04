import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderBox from '../../HeaderBox';
import "./SideNavBar.scss";
import MediaBoxAlt from '../../MediaBoxAlt';

class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poll: {
                question: "Ante nulla in ut quis. Risus nisl scelerisque duis ultrices in morbi pretium in eget.",
                answers: ["Yes", "No", "Maybe", "I don't understand"]
            },
            pollAnswer: 0
        }
    }

    handleCheck = (value) => {
        this.setState({
            pollAnswer: value
        })
    }

    render() {
        return (
            <div>
                <section style={{ marginTop: "40px" }}>
                    <HeaderBox value="Find us on Facebook" width="230px" />
                    <div className="sidenavbar-section" style={{height: "188px", backgroundColor: "#e2e2e2"}}>
    
                    </div>
                </section>
                <section style={{ marginTop: "40px" }}>
                    <HeaderBox value="Poll" width="140px" />
                    <div className="sidenavbar-section poll">
                        <h3>What Do You Think?</h3>
                        <p>{this.state.poll.question}</p>
                        {
                            this.state.poll.answers.map((ans, index) => 
                            <>
                            <label class="container">{ans}
                            <input type="radio" onClick={() => this.handleCheck(index)} checked={this.state.pollAnswer === index ? true : false} name="radio"/>
                            <span class="checkmark"></span>
                        </label>
                            </>
                            )
                        }
                    </div>
                </section>
                <section style={{ marginTop: "40px" }}>
                    <HeaderBox value="Obituaries" width="140px" />
                    <div className="sidenavbar-section poll">
                        <MediaBoxAlt
                            width="100%"
                            date="1/01/2020"
                            category="Sports"
                            title="Quam risus velit in a purus nisi urna"
                            content="lorum ipsum velit in a purus"
                            author="Jane Doe"
                            img={false}
                        />
                        <MediaBoxAlt
                            width="100%"
                            date="1/01/2020"
                            category="Sports"
                            title="Quam risus velit in a purus nisi urna"
                            content="lorum ipsum velit in a purus"
                            author="Jane Doe"
                            img={false}
                        />
                        <MediaBoxAlt
                            width="100%"
                            date="1/01/2020"
                            category="Sports"
                            title="Quam risus velit in a purus nisi urna"
                            content="lorum ipsum velit in a purus"
                            author="Jane Doe"
                            img={false}
                        />
                        <MediaBoxAlt
                            width="100%"
                            date="1/01/2020"
                            category="Sports"
                            title="Quam risus velit in a purus nisi urna"
                            content="lorum ipsum velit in a purus"
                            author="Jane Doe"
                            img={false}
                        />
                    </div>
                </section>
                <section style={{ marginTop: "40px" }}>
                    <HeaderBox value="E-Edition" width="140px" />
                    <div className="sidenavbar-section poll">
                        <img src="/images/getprima.jpg" atl="e-edition" />
                    </div>
                </section>
            </div>
        )
    }
    
}

SideNavBar.propTypes = {

}

export default SideNavBar

