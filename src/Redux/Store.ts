import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

// Combine reducers in case you have multiple reducers in the future
const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

// Create the store with the rootReducer
export const store = createStore(rootReducer);
