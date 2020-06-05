import React from 'react';

class LanguageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: props.language ? props.languages.language : ''
    };

  }
  onLanguageChange = (e) => {
    const language = e.target.value;
    this.setState(() => ({ language }));
  };
  onSubmit = (e) => {
    e.preventDefault();


    if (!this.state.language) {
      this.setState(() => ({ error: 'Por favor, digite um idioma.' }));
    } 
    else {
      this.setState(() => ({ error: '' }));

      this.props.onSubmit({
        language: this.state.language.toUpperCase()
      });
      
      this.setState(() => ({language: ''}))
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          maxlength="20"
          className="input-language"
          placeholder="Digite o nome do idioma"
          autoFocus
          value={this.state.language}
          onChange={this.onLanguageChange}
        />
        <div>
          <button className="button button--add">Salvar Idioma</button>
        </div>
      </form>
    )
  }
}


export default LanguageForm


