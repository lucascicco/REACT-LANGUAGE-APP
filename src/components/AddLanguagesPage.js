import React from 'react';
import { connect } from 'react-redux';
import LanguageForm from './LanguageForm'
import { startAddLanguage } from '../actions/Languages';
import LanguagesList from '../components/LanguageList'


export class addLanguagePage extends React.Component{
  onSubmit = (Language) => {
    console.log(this.props.languages.length)

    if(this.props.languages.length === 0){
      this.props.startAddLanguage(Language);
    }else{
      const find =  this.props.languages.find((item) => {
        return item.language === Language.language
      })
      
      if(find !== undefined){
        alert('Este idioma já existe.')
      }else{
        this.props.startAddLanguage(Language);
      }
    }
  } 
  render(){
    return(
      <div className="content-container centering">
        <h1>Adicione um idioma</h1>
        <LanguageForm
          onSubmit={this.onSubmit}
        />
        <LanguagesList />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddLanguage: (Language) => dispatch(startAddLanguage(Language))
});


const mapStateToProps = (state) => {
  return {
    languages: state.languages
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(addLanguagePage);
  
