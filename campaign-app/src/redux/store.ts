// // store.ts
// import { configureStore } from "@reduxjs/toolkit";
// import campaignsReducer from "./campaignsSlice";

// export const store = configureStore({
//   reducer: {
//     campaigns: campaignsReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// import { createStore, combineReducers } from "redux";
// import { campaignReducer } from "./campaigns/campaignsReducer";

// const rootReducer = combineReducers({
//   campaigns: campaignReducer,
//   // more reducers would go here
// });

// const store = createStore(rootReducer);

// export default store;

import { createStore, combineReducers } from "redux";
import { campaignReducer } from "./campaigns/campaignsReducer";

const rootReducer = combineReducers({
  campaigns: campaignReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
