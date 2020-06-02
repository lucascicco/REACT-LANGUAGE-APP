import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import addLanguagePage from '../components/AddLanguagesPage';
import addVocabularyPage from '../components/AddVocabularyPage'
import LanguageDashBoard from '../components/Dashboard'
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LanguageDashBoard} exact={true} />
        <Route path="/createLanguage" component={addLanguagePage} />
        <Route path="/createWord" component={addVocabularyPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
