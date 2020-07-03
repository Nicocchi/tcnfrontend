import React from "react";
import Landing from "./Landing";
import shortID from "shortid";

const routes = [
    <Route key={shortID.generate()} exact path="/" component={Landing} />,
]
export default routes;