import { createStore } from "redux"

const bearReducer = (state = [] , action) => {
    return state;
}

export const store = createStore(bearReducer)