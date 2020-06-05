import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
          <h1 className="header__title">Revisão de Vocabulário</h1>
          <div className="header__menu">
            <div>
              <NavLink className="button-navlink" to="/dashboard" activeClassName="active" exact={true}>Início</NavLink>
              <NavLink className="button-navlink" to="/createLanguage" activeClassName="active">Idiomas</NavLink>
            </div>
            <button className="button button--logout " onClick={startLogout}>Sair</button>
          </div> 
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

