import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import addLanguagePage from '../components/AddLanguagesPage';
import addVocabularyPage from '../components/AddVocabularyPage'
import createHistory from 'history/createBrowserHistory';
import VocabularyDashboard  from '../components/VocabularyDashboardPage'
import EditVocabularyPage from '../components/EditVocabularyPage'
import LanguageDashBoard from '../components/Dashboard'
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={LanguageDashBoard} />
        <PrivateRoute path="/createLanguage" component={addLanguagePage} />
        <PrivateRoute path="/language/:id" component={VocabularyDashboard} />
        <PrivateRoute path="/createWord/:id" component={addVocabularyPage} />
        <PrivateRoute path="/editWord/:idLanguage/:id" component={EditVocabularyPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
