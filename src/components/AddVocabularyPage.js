import React from 'react';
import { connect } from 'react-redux';
import VocabularyForm from './VocabularyForm';
import { addVocabulary } from '../actions/vocabularies';


const AddVocabularyPage = (props) => (
    <div>
      <h1>Adicionar Palavra</h1>
      <VocabularyForm
        languages={props.languages}
        onSubmit={(vocabulary) => {
          props.dispatch(addVocabulary(vocabulary));
          props.history.push('/');
        }}
      />
    </div>
);


const mapStateToProps = (state) => {
  return {
    languages: state.languages
  };
};

export default connect(mapStateToProps)(AddVocabularyPage)
  
