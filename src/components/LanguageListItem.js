import React from 'react';
import { connect } from 'react-redux';
import { removeLanguage } from '../actions/Languages'

const LanguageListItem = (props) => {
  return(
    <div>
      <h3>{props.language}</h3>
      <button 
      onClick={() => {
        props.dispatch(removeLanguage(props.id))
      }}
      >Remover</button>
    </div>
  )
}


export default connect()(LanguageListItem)