import React from "react";
import { Route } from "react-router";
import Landing from "./Pages/Landing";
import shortID from "shortid";
import PoliceReports from "./Pages/PoliceReports/PoliceReports";
import Article from "./Pages/Article";

const routes = [
    <Route key={shortID.generate()} exact path="/" component={Landing} />,
    <Route key={shortID.generate()} exact path="/police-reports" component={PoliceReports} />,
    <Route key={shortID.generate()} path="/police-reports/:id" component={Article} />,
]
export default routes;