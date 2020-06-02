import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeLanguage } from '../actions/Languages'

const LanguageListItem = (props) => {
  return(
    <div>
      <Link to={`/language/${props.id}`}>
        <h3>{props.language}</h3>
      </Link>
      <button 
      onClick={() => {
        if(confirm("Tem certeza? Essa ação apagará todas palavras relacionadas a este idioma.")){
            props.dispatch(removeLanguage(props.id))
        }
      }}
      >Remover</button>

    </div>
  )
}


export default connect()(LanguageListItem)