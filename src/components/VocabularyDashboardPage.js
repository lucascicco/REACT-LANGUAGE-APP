import React from 'react';
import VocabularyList from './VocabularyList';
import VocabularyListFilters from './VocabularyListFilters';
import VocabulariesFromOne from '../selectors/VocabulariesFromOne'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const VocabularyDashboardPage = (props) =>{
  return(
    <div>
      <h1>Idioma - {props.language.language.toUpperCase()}</h1>
      <Link to={`/createWord/${props.match.params.id}`}>Criar vocabulário</Link>
      <VocabularyListFilters />
      {
        props.vocabularies.length === 0 ? (
          <div>
            <div>Sem vocabulário para este idioma</div>
          </div>
      ) : (
        <div> 
            <VocabularyList language={props.language}/>
        </div>
          )
      }  
    </div>
  )
}


const mapStateToProps = (state, props) => {
  const language = state.languages.find((language) => language.id === props.match.params.id)
  return {
    language: language,
    vocabularies: VocabulariesFromOne(state.vocabularies, language.language, state.filters)
  }
};


export default connect(mapStateToProps)(VocabularyDashboardPage)