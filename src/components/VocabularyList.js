import React from 'react';
import { connect } from 'react-redux';
import VocabularyListItem from './VocabularyListItem';
import VocabulariesFromOne from '../selectors/VocabulariesFromOne'

// class VocabularyList extends React.Component{
//   constructor(props){
//     super(props)

//     this.state = {
//       vocabularies: props.vocabularies,
//       idioma: props.language.id,
//       language: props.language.language
//     }
//   }
//   render(){
//     return (
//       <div>
//         <h3>Lista de Vocabulários</h3>
//         {this.state.vocabularies.map((vocabulary) => {
//           return <VocabularyListItem 
//           key={vocabulary.id}
//           idioma={this.state.idioma}
//           {...vocabulary}
//           />;
//         })}
//       </div>
//     )
//   }
// }

const VocabularyList = (props) => {
  return(
    <div>
      <h3>Lista de Vocabulários</h3>
      {props.vocabularies.map((vocabulary) => {
        return <VocabularyListItem 
        key={vocabulary.id}
        idioma={props.language.id}
        {...vocabulary}
        />;
      })}
  </div>
  )
}


const mapStateToProps = (state, props) => {
  console.log(props.language.language)
  return {
    vocabularies: VocabulariesFromOne(state.vocabularies, props.language.language ,state.filters)
  };
};

export default connect(mapStateToProps)(VocabularyList);


