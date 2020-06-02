import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Header = (props) => (
  <header>
    <h1>Revisão de vocabulário</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/createLanguage" activeClassName="is-active" exact={true}>Criar idioma</NavLink>
    {
      props.languages.length === 0 ? (
          ''
      ) : (
         <NavLink to="/createWord">Criar palavra</NavLink>   
      )
    }
  </header>
);

const mapStateToProps = (state) => {
  return {
    languages: state.languages
  };
};

export default connect(mapStateToProps)(Header);
