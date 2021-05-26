import { createStore, applyMiddleware, combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const store = createStore(
  combineReducers({
    // userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
