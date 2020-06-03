import React from 'react';
import VocabularyList from './VocabularyList';
import VocabularyListFilters from './VocabularyListFilters';
import VocabulariesFromOne from '../selectors/VocabulariesFromOne'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const VocabularyDashboardPage = (props) =>{
  return(
    <div>
      <h1>Idioma - {props.language.language}</h1>
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
  const languageName = state.languages.find((language) => language.id === props.match.params.id).language
  return {
    language: state.languages.find((language) => language.id === props.match.params.id),
    vocabularies: VocabulariesFromOne(state.vocabularies, languageName ,  state.filters)
  }
};


export default connect(mapStateToProps)(VocabularyDashboardPage)