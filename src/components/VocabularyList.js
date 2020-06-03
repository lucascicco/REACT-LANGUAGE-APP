import React from 'react';
import { connect } from 'react-redux';
import VocabularyListItem from './VocabularyListItem';
import SelectVocabulary from '../selectors/vocabularies';

class VocabularyList extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      vocabularies: props.vocabularies,
      idioma: props.language.id,
      language: props.language.language
    }
    
  }
  componentDidMount(){
    const vocabularies = this.state.vocabularies.filter((vocabulary) => {
      return vocabulary.language === this.state.language
    })

    this.setState(() => ({vocabularies}));
  }
  render(){
    return (
      <div>
        <h3>Lista de Vocabulários</h3>
        {this.state.vocabularies.map((vocabulary) => {
          return <VocabularyListItem 
          key={vocabulary.id}
          idioma={this.state.idioma}
          {...vocabulary}
          />;
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    vocabularies: SelectVocabulary(state.vocabularies, state.filters)
  };
};

export default connect(mapStateToProps)(VocabularyList);

