import React from 'react';
import { connect } from 'react-redux';
import LanguageForm from './LanguageForm'
import { addLanguage } from '../actions/Languages';
import LanguagesList from '../components/LanguageList'

const addLanguagePage = (props) => (
    <div>
      <h1>Adicione um idioma</h1>
      <LanguageForm
        onSubmit={(Language) => {
          props.dispatch(addLanguage(Language))
        }}
      />
      <LanguagesList />
    </div>
);

export default connect()(addLanguagePage);
  
