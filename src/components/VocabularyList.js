import React from 'react';
import { connect } from 'react-redux';
import VocabularyListItem from './VocabularyListItem';
import VocabulariesFromOne from '../selectors/VocabulariesFromOne'


const VocabularyList = (props) => {
  return(
    <div>
      <h3>Lista de Vocabulários</h3>
      {props.vocabularies.map((vocabulary) => {
        return <VocabularyListItem 
        key={vocabulary.id}
        idioma={props.language.id}
        {...vocabulary}
        />;
      })}
  </div>
  )
}


const mapStateToProps = (state, props) => {
  return {
    vocabularies: VocabulariesFromOne(state.vocabularies, props.language.language ,state.filters)
  };
};

export default connect(mapStateToProps)(VocabularyList);


