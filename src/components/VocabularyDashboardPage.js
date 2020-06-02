import React from 'react';
import VocabularyList from './VocabularyList';
import VocabularyListFilters from './VocabularyListFilters';
import SelectVocabulary from '../selectors/vocabularies'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const VocabularyDashboardPage  = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Idioma - {props.language.language}</h1>
      <Link to={`/createWord/${props.match.params.id}`}>Criar vocabulário</Link>
      {
        props.vocabularies.length === 0 ? (
          <div>
            <div>Sem vocabulário para este idioma</div>
          </div>
      ) : (
        <div> 
            <VocabularyListFilters />
            <VocabularyList languageId={props.language.id}/>
        </div>
          )
      }  
    </div>
  )
}
  


const mapStateToProps = (state, props) => {
  return {
    vocabularies: SelectVocabulary(state.vocabularies, state.filters),
    language: state.languages.find((language) => language.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(VocabularyDashboardPage)