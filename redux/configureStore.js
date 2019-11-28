import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      
    }),
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  return store;
};
