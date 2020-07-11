import React, { Component } from "react";
import { withRouter, Switch } from "react-router-dom";
import TopBar from "./Components/Navigation/TopBar";
import Header from "./Components/Header";
import NavBar from "./Components/Navigation/NavBar";
import { fetchPost } from "./Store/actions";
import { connect } from "react-redux";
import "./App.scss";
import routes from "./routes";
import Footer from "./Components/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false,
            hidden: false,
        };
    }

    componentDidMount() {
        this.props.fetchPost();
    }
    // <NavBar hidden={this.state.hidden} />
    render() {
        return (
            <div className="App">
                <TopBar />
                <Header />
                <NavBar hidden={this.state.hidden} />
                <div className="App-content">
                    <Switch>{routes}</Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { articles: state.rootReducer.articles };
}

export default connect(mapStateToProps, { fetchPost })(withRouter(App));
