import React from 'react';
import { connect } from 'react-redux';
import VocabularyForm from './VocabularyForm';
import { addVocabulary } from '../actions/vocabularies';


const AddVocabularyPage = (props) => (
    <div>
      <h1>Adicionar Palavra</h1>
      <VocabularyForm
        language={props.language.language}
        onSubmit={(vocabulary) => {
          props.dispatch(addVocabulary(vocabulary));
          props.history.push(`/language/${props.language.id}`);
        }}
      />
    </div>
);

const mapStateToProps = (state, props) => {
  return {
    language: state.languages.find((language) => language.id === props.match.params.id)
  };
};


export default connect(mapStateToProps)(AddVocabularyPage)
  
