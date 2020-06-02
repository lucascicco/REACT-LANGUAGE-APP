import React from 'react';
import moment from 'moment';

export default class VocabularyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: props.word ? props.vocabulary.word : '',
      translation: props.translation ? props.vocabulary.translation : '',
      phrases: props.phrases ? props.vocabulary.phrases : '',
      createdAt: props.createdAt ? moment(props.vocabulary.createdAt).format("MMM Do YY") : moment().format("MMM Do YY"),
      languages: props.languages,
      language: props.language ? props.language : '',
      error: ''
    };
  }
  onWordChange = (e) => {
    const word = e.target.value;
    this.setState(() => ({ word }));
  };
  onTranslationChange = (e) => {
    const translation = e.target.value;
    this.setState(() => ({ translation }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onLanguageChange = (e) => {
    const language = e.target.value;
    this.setState(() => ({ language }))
  }
  onPhrasesChange = (e) => {
      const phrases = e.target.value;
      this.setState(() => ({ phrases }))
  }
  TestingIt = () => {
    this.state.languages.map((language) => {
      console.log(language.language)
    })
  }
  onSubmit = (e) => {

    e.preventDefault();

    if (!this.state.word) {
      this.setState(() => ({ error: 'Por favor, digite a palara original.' }));
    } else {
      this.setState(() => ({ error: '' }));

      this.props.onSubmit({
        word: this.state.word,
        translation: this.state.translation,
        createdAt: this.state.createdAt.valueOf(),
        phrases: this.state.phrases,
        language: this.state.language
      });
    }
  };
  render() {
    return (
      <div>
          <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}

          <input
            type="text"
            placeholder="Palavra original"
            autoFocus
            className="text-input"
            value={this.state.word}
            onChange={this.onWordChange}
          />
          <input
            type="text"
            placeholder="Tradução"
            className="text-input"
            value={this.state.translation}
            onChange={this.onTranslationChange}
          />
          <textarea
            placeholder="Anotações"
            className="textarea"
            value={this.state.phrases}
            onChange={this.onPhrasesChange}
          >
          </textarea>
  
          <div>
            <button className="button">Salvar Vocabulário</button>
          </div>

        </form>

      </div>
    )
  }
}

