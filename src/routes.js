import React from "react";
import { Route } from "react-router";
import Landing from "./Pages/Landing";
import shortID from "shortid";
import PoliceReports from "./Pages/PoliceReports/PoliceReports";
import SportsArticles from "./Pages/SportsArticles/SportsArticles";
import ObituaryArticles from "./Pages/Obituaries/Obituaries";
import FoodRecepes from "./Pages/FoodRecipes/FoodRecipes";
import Article from "./Pages/Article";

const routes = [
    <Route key={shortID.generate()} exact path="/" component={Landing} />,
    <Route key={shortID.generate()} exact path="/police-reports" component={PoliceReports} />,
    <Route key={shortID.generate()} exact path="/sports-articles" component={SportsArticles} />,
    <Route key={shortID.generate()} exact path="/obituaries" component={ObituaryArticles} />,
    <Route key={shortID.generate()} exact path="/food/from-our-table-to-yours" component={FoodRecepes} />,
    <Route key={shortID.generate()} path="/police-reports/:id" component={Article} />,
    <Route key={shortID.generate()} path="/sports-articles/:id" component={Article} />,
    <Route key={shortID.generate()} path="/obituary-articles/:id" component={Article} />,
    <Route key={shortID.generate()} path="/food/from-our-table-to-yours/:id" component={Article} />,
]
export default routes;