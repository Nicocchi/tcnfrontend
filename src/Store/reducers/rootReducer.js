import { CONSTANTS } from "../actions";

const initialState = {
    articles: [],
    policeReports: null,
    sportsArticles: null,
    obituaryArticles: null,
    foodRecipes: null,
    entertainmentArticles: null,
    aFront: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.EXAMPLE: {
            return { ...state };
        }

        case CONSTANTS.FETCH_POST_SUCCESS: {
            return {
                ...state,
                policeReports: action.payload.policeReports,
                sportsArticles: action.payload.sportsArticles,
                obituaryArticles: action.payload.obituaryArticles,
                foodRecipes: action.payload.foodRecipes,
                entertainmentArticles: action.payload.entertainmentArticles,
                aFront: action.payload.aFront
            };
        }

        default:
            return state;
    }
};

export default rootReducer;
