import React from 'react';
import { connect } from 'react-redux';
import VocabularyForm from './VocabularyForm';
import { Link } from 'react-router-dom';
import  VocabulariesFromOne  from '../selectors/VocabulariesFromOne'
import { startAddVocabulary } from '../actions/vocabularies';


export class AddVocabularyPage extends React.Component{
  onSubmit = (vocabulary) => {
    if(this.props.vocabularies.length === 0){
      this.props.startAddVocabulary(vocabulary)
      this.props.history.push(`/language/${this.props.language.id}`);
    }else{
      const find = this.props.vocabularies.find((item) => {
        return item.word === vocabulary.word
      })

      if(find !== undefined){
        console.log('Este item já existe na lista de vocabulários' + find.word)
        alert('Este vocabulário já existe.')
      }else{
        this.props.startAddVocabulary(vocabulary)
        this.props.history.push(`/language/${this.props.language.id}`);
      }
    }   
  }
  render(){
    return(
       <div>
          <Link to={`/language/${this.props.language.id}`}>
            Voltar  
          </Link>
          <h1>Adicionar Palavra</h1>
          <VocabularyForm
            language={this.props.language.language}
            onSubmit={this.onSubmit}
          />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const language = state.languages.find((language) => language.id === props.match.params.id)
  return {
    language: language,
    vocabularies: VocabulariesFromOne(state.vocabularies, language.language , state.filters)
  }
};

const mapDispatchToProps = (dispatch) => ({
  startAddVocabulary: (vocabulary) => dispatch(startAddVocabulary(vocabulary)),
});



export default connect(mapStateToProps, mapDispatchToProps)(AddVocabularyPage)
  
