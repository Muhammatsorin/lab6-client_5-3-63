import { createStore } from "redux"

const bearReducer = ( bears = [] , action) => {
    switch(action.type) {
        case "GET_BEARS":
            return action.bears;
    }
    return bears;
}

export const store = createStore(bearReducer)