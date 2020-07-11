import { CONSTANTS } from "../actions";

export const example = () => {
    return (dispatch, getState) => {
        dispatch({
            type: CONSTANTS.EXAMPLE,
        });
        // Code here
    };
};

/**
 * Fetches all entries from Contentful API and sets the
 * Redux state to only entries that are of type 'post'
 * @async
 * @method
 * @param {Object} contentful - The Contentful client
 *
 * @returns {Object} Dispatch object
 */
export const fetchPost = (contentful) => {
    return async (dispatch) => {
        dispatch({ type: CONSTANTS.FETCH_POSTS_START });

        const contentful = require("contentful");

        const client = contentful.createClient({
            space: process.env.REACT_APP_CMS_PROD_SPACE_ID,
            environment: "master", // defaults to 'master' if not set
            accessToken: process.env.REACT_APP_CMS_PROD_ACCESS_TOKEN,
        });

        // try {
        // 	const policeReports = await client.getContentTypes("policeReport");

        // console.log("policeReports", policeReports);

        // dispatch({ type: CONSTANTS.FETCH_POST_SUCCESS, payload: { policeReports: policeReports.items } });
        // } catch (error) {
        // 	console.log(error);
        // 	dispatch({ type: CONSTANTS.FETCH_POST_FAILURE })
        // }

        client
            .getEntries({ include: 5, limit: 900 })
            .then((response) => {
                let policeReports = [],
                    sportsArticles = [],
                    obituaryArticles = [],
                    foodRecipes = [],
                    entertainmentArticles = [],
                    aFront = [];
                response.items.forEach((entry, index) => {
                    if (entry.sys.contentType.sys.id === "policeReport") policeReports.push(entry);
                    if (entry.sys.contentType.sys.id === "sportsArticle") sportsArticles.push(entry);
                    if (entry.sys.contentType.sys.id === "obituaryArticles") obituaryArticles.push(entry);
                    if (entry.sys.contentType.sys.id === "foodRecipes") foodRecipes.push(entry);
                    if (entry.sys.contentType.sys.id === "entertainmentArticles") entertainmentArticles.push(entry);
                    if (entry.sys.contentType.sys.id === "aFront") aFront.push(entry);
                });

                const sortedPoliceReports = policeReports
                    .slice()
                    .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
                const sortedSportsArticles = sportsArticles
                    .slice()
                    .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
                const sortedObituaryArticles = obituaryArticles
                    .slice()
                    .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
                const sortedFoodRecipes = foodRecipes
                    .slice()
                    .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
                const sortedEntertainmentArticles = entertainmentArticles
                    .slice()
                    .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
                const sortedAfront = aFront
                    .slice()
                    .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));

                dispatch({
                    type: CONSTANTS.FETCH_POST_SUCCESS,
                    payload: {
                        policeReports: sortedPoliceReports,
                        sportsArticles: sortedSportsArticles,
                        obituaryArticles: sortedObituaryArticles,
                        foodRecipes: sortedFoodRecipes,
                        entertainmentArticles: sortedEntertainmentArticles,
                        aFront: sortedAfront
                    },
                });
            })
            .catch((err) => dispatch({ type: CONSTANTS.FETCH_POST_FAILURE, payload: err }));
    };
};
