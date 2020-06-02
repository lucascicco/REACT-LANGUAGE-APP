import React from 'react';
import { connect } from 'react-redux';
import VocabularyListItem from './VocabularyListItem';
import SelectVocabulary from '../selectors/vocabularies';

const VocabularyList = (props) => (
  <div>
    <h3>Lista de Vocabulários</h3>
    {props.vocabularies.map((vocabulary) => {
      return <VocabularyListItem key={vocabulary.id} {...vocabulary} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    vocabularies: SelectVocabulary(state.vocabularies, state.filters)
  };
};

export default connect(mapStateToProps)(VocabularyList);
