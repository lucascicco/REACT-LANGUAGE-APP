import React from 'react';
import { connect } from 'react-redux';

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
        language: this.state.language,
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Digite o nome do idioma"
          autoFocus
          value={this.state.language}
          onChange={this.onLanguageChange}
        />
        <div>
          <button className="button">Salvar Idioma</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    languages: state.languages
  };
};


export default connect(mapStateToProps)(LanguageForm)


