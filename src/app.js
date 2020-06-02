import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleVocabularies from './selectors/vocabularies';
import 'normalize.css/normalize.css';

const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleVocabularies(state.vocabularies, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
