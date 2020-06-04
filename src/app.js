import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history}  from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetLanguages } from './actions/Languages'
import { startSetVocabularies } from './actions/Vocabularies';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import vocabularies from './reducers/vocabularies';
import languages from './reducers/languages';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetLanguages()).then(() => {
      const getStoreLanguages = store.getState().languages

      getStoreLanguages.map((x) => {
        store.dispatch(startSetVocabularies(x.language)) 
      })
  
      renderApp();

      if (history.location.pathname === '/') {
        history.push('/'); //? deixa mais rapido?
      }

    });

  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

