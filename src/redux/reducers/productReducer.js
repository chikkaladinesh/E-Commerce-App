import { ActionTypes } from "../contants/action-types";

const inititalState = {
    products : [],
};
export const productReducer = (state = inititalState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload };
            default:
            return state;
    }
};

export const selectedproductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
            default:
            return state;
    }
};