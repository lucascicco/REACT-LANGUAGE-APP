import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { startRemoveLanguage } from '../actions/Languages'


export class LanguageListItem extends React.Component{
  render(){
    return(
      <div className="list-config">
        <div className="list-language">
          <Link to={`/language/${this.props.id}`} className="list-language-item-link">
            <h3>{this.props.language}</h3>
          </Link>
          <button 
          onClick={() => {
            if(confirm("Tem certeza? Essa ação apagará todas palavras relacionadas a este idioma.")){
              this.props.dispatch(startRemoveLanguage(this.props))
            }
          }}
          className="list-language-button"
          >X</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startRemoveLanguage: (idioma) => dispatch(startRemoveLanguage(idioma)),
});


export default connect(mapDispatchToProps)(LanguageListItem)