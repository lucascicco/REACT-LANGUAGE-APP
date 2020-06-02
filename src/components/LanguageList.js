import React from 'react';
import { connect } from 'react-redux';
import LanguageListItem from './LanguageListItem';

const LanguageList = (props) => (
  <div>
    <h1>{props.languages.length === 0 ? '' : 'Lista de idiomas'}</h1>
    {props.languages.map((language) => {
      return <LanguageListItem key={language.id} {...language}
      />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    languages: state.languages
  };
};

export default connect(mapStateToProps)(LanguageList);

// <Link to={`/createVocabulary/${id}`}>
//          Adicionar idioma
// </Link>