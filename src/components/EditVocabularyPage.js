import React from 'react';
import { connect } from 'react-redux';
import VocabularyForm from './EditVocabularyForm';
import { Link } from 'react-router-dom'
import VocabulariesFromOne from '../selectors/VocabulariesFromOne'
import { startEditVocabulary , startRemoveVocabulary } from '../actions/Vocabularies';


export class EditVocabularyPage extends React.Component {
  onSubmit = (vocabulary) => {
      this.props.startEditVocabulary(this.props.vocabulary, vocabulary);
      this.props.history.push(`/language/${this.props.match.params.idLanguage}`);
  }
  onClick = () => {
    this.props.startRemoveVocabulary(this.props.vocabulary);
    this.props.history.push(`/language/${this.props.match.params.idLanguage}`);
  }
  render(){
    return(
      <div className="content-container">
        <div className=" back-to-page back-to-page-fromedit">
          <Link to={`/language/${this.props.match.params.idLanguage}`}
            className="back-to-button back-to-button--edit">
              Voltar
          </Link>
          <button onClick={this.onClick}
          className="back-to-button back-to-button--edit">Remover</button>
        </div>
        <div>
          <VocabularyForm
            language={this.props.vocabulary.language}
            vocabulary={this.props.vocabulary}
            onSubmit={this.onSubmit}
          />
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const language = state.languages.find((language) => language.id === props.match.params.idLanguage)
  return {
    vocabulary: state.vocabularies.find((vocabulary) => vocabulary.id === props.match.params.id),
    vocabularies: VocabulariesFromOne(state.vocabularies, language.language , state.filters)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditVocabulary: (vocabulary, updates) => dispatch(startEditVocabulary(vocabulary, updates)),
  startRemoveVocabulary: (vocabulary) => dispatch(startRemoveVocabulary(vocabulary))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditVocabularyPage);

