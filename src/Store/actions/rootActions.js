import { CONSTANTS } from "../actions";

export const example = () => {
    return (dispatch, getState) => {
        dispatch({
            type: CONSTANTS.EXAMPLE
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
export const fetchPost = contentful => {
	return async dispatch => {
		dispatch({ type: CONSTANTS.FETCH_POSTS_START });

		const contentful = require("contentful");

		const client = contentful.createClient({
			space: process.env.REACT_APP_CMS_PROD_SPACE_ID,
			environment: "master", // defaults to 'master' if not set
			accessToken: process.env.REACT_APP_CMS_PROD_ACCESS_TOKEN
		});

		client
			.getEntries({ include: 5, limit: 900 })
			.then(response => {
                let posts = [];
				response.items.forEach((entry, index) => {
					if (entry.sys.contentType.sys.id === "article") posts.push(entry);
                });
                
				dispatch({ type: CONSTANTS.FETCH_POST_SUCCESS, payload: { posts } });
			})
			.catch(err => dispatch({ type: CONSTANTS.FETCH_POST_FAILURE }));
	};
};