import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import LanguagesReducer from '../reducers/languages'
import VocabulariesReducer from '../reducers/vocabularies';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      languages: LanguagesReducer,
      vocabularies: VocabulariesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
