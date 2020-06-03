import React from 'react';
import VocabularyList from './VocabularyList';
import VocabularyListFilters from './VocabularyListFilters';
import SelectVocabulary from '../selectors/vocabularies'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class VocabularyDashboardPage extends React.Component{
  constructor(props){
    super(props)

      this.state = {
        vocabularies: props.vocabularies,
        language: props.language
      }
  }
  componentDidMount(){
    const vocabularies = this.state.vocabularies.filter((vocabulary) => {
      return vocabulary.language === this.state.language.language
    })

    this.setState(() => ({vocabularies}));
  }
  render(){
    return(
      <div>
        <h1>Idioma - {this.state.language.language}</h1>
        <Link to={`/createWord/${this.props.match.params.id}`}>Criar vocabulário</Link>
        {
          this.state.vocabularies.length === 0 ? (
            <div>
              <div>Sem vocabulário para este idioma</div>
            </div>
        ) : (
          <div> 
              <VocabularyListFilters />
              <VocabularyList language={this.state.language}/>
          </div>
            )
        }  
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    vocabularies: SelectVocabulary(state.vocabularies, state.filters),
    language: state.languages.find((language) => language.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(VocabularyDashboardPage)