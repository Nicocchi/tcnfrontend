import { CONSTANTS } from "../actions";

export const example = () => {
    return (dispatch, getState) => {
        dispatch({
            type: CONSTANTS.EXAMPLE
        });
        // Code here
    };
};