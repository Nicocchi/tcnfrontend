import { CONSTANTS } from "../actions";

const initialState = {
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.EXAMPLE: {
            return { ...state };
        }

        default:
            return state;
    }
};

export default rootReducer;