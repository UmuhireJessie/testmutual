import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
} from "redux-state-sync";
import { composeWithDevTools } from "redux-devtools-extension";
const config = {};
const middleware = [thunk, createStateSyncMiddleware(config)];
const store = createStore(
  composeWithDevTools(compose(applyMiddleware(...middleware)))
);
initStateWithPrevTab(store);
export default store;