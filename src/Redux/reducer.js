import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({});

const rootReducers = (state, action) => {
    return reducers(state, action);
}

export default rootReducers;