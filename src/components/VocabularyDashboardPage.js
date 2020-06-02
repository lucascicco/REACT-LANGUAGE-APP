import React from 'react';
import VocabularyList from './VocabularyList';
import VocabularyListFilters from './VocabularyListFilters';
import SelectVocabulary from '../selectors/vocabularies'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const VocabularyDashboardPage  = (props) => (
  <div>
    {
      props.vocabularies.length === 0 ? (
        <div>
          <span>Sem vocabulário</span>
        </div>
    ) : (
      <div>
          <h1>Vocabulário Dashboard</h1>
          <VocabularyListFilters />
          <VocabularyList />
      </div>
        )
    }  
  </div>
)


const mapStateToProps = (state) => {
  return {
    vocabularies: SelectVocabulary(state.vocabularies, state.filters)
  };
};


export default connect(mapStateToProps)(VocabularyDashboardPage)