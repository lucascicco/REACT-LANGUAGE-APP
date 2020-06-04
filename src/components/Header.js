import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
  <header>
    <h1>Revisão de vocabulário</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/createLanguage" activeClassName="is-active" exact={true}>Idiomas</NavLink>
    <button className="button button--link" onClick={startLogout}>Sair</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

