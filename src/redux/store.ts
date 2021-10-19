import { createStore } from "redux";

import { compose } from "redux";

import reducers from "./reducers/index";
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers()
);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;