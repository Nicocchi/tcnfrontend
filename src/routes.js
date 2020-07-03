import React from "react";
import { Route } from "react-router";
import Landing from "./Pages/Landing";
import shortID from "shortid";

const routes = [
    <Route key={shortID.generate()} exact path="/" component={Landing} />,
]
export default routes;