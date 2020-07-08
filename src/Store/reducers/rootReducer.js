import { CONSTANTS } from "../actions";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.EXAMPLE: {
            return { ...state };
        }

        case CONSTANTS.FETCH_POST_SUCCESS: {
            return { ...state, articles: action.payload.posts };
        }

        default:
            return state;
    }
};

export default rootReducer;