import React from 'react';
import { connect } from 'react-redux';
import VocabularyDashboardPage from './VocabularyDashboardPage'

const LanguageDashboard = (props) => (
  <div>
    {
      props.languages.length === 0 ? (
        <div>
          <span>Idioma inexistente</span>
        </div>
    ) : (
        <VocabularyDashboardPage />
    )
  }
  </div>
);

const mapStateToProps = (state) => {
  return {
    languages: state.languages
  };
};


export default connect(mapStateToProps)(LanguageDashboard);