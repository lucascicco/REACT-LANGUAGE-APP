import React from 'react';
import { connect } from 'react-redux';
import VocabularyForm from './VocabularyForm';
import { editVocabulary , removeVocabulary } from '../actions/Vocabularies';


const EditVocabularyPage = (props) => {
  return (
    <div>
      <VocabularyForm
        vocabulary={props.vocabulary}
        onSubmit={(vocabulary) => {
          props.dispatch(editVocabulary(props.vocabulary.id, vocabulary));
          props.history.push(`/language/${props.match.params.idLanguage}`);
        }}
      />
      <button onClick={() => {
        props.dispatch(removeVocabulary({ id: props.vocabulary.id }));
        props.history.push(`/language/${props.match.params.idLanguage}`);
      }}>Remove</button>
    </div>
  );
};


const mapStateToProps = (state, props) => {
  return {
    vocabulary: state.vocabularies.find((vocabulary) => vocabulary.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditVocabularyPage);


// class EditVocabularyPage extends React.Component{
//   constructor(props){
//     super(props)

//       this.state = {
        
//       }
//   }
//   render(){
//     return(
//       <div>
//       <VocabularyForm
//         vocabulary={props.vocabulary}
//         onSubmit={(vocabulary) => {
//           props.dispatch(editVocabulary(props.vocabulary.id, vocabulary));
//           props.history.push(``);
//         }}
//       />
//       <button onClick={() => {
//         props.dispatch(removeVocabulary({ id: props.vocabulary.id }));
//         props.history.push(``);
//       }}>Remove</button>
//     </div>
//     )
//   }
// }
