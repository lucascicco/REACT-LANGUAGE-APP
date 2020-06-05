import React from 'react';
import VocabularyList from './VocabularyList';
import VocabularyListFilters from './VocabularyListFilters';
import VocabulariesFromOne from '../selectors/VocabulariesFromOne'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const VocabularyDashboardPage = (props) =>{
  return(
    <div className="content-container">
      <div className="content-container-full">
        <h1 className="title-style">{props.language.language.toUpperCase()}</h1>
         <Link to={`/createWord/${props.match.params.id}`} className="button_create">Criar vocabulário</Link>
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