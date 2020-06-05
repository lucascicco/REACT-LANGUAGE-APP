import React from 'react';
import moment from 'moment';

export default class VocabularyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: props.vocabulary.word,
      translation: props.vocabulary.translation,
      phrases: props.vocabulary.phrases,
      createdAt: props.createdAt ? moment(props.vocabulary.createdAt).format("MMM Do YY") : moment().format("MMM Do YY"),
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
  onPhrasesChange = (e) => {
    const phrases = e.target.value;
    this.setState(() => ({ phrases }))
  }
  onSubmit = (e) => {

    e.preventDefault();

      this.props.onSubmit({
        word: this.state.word.toUpperCase(),
        translation: this.state.translation,
        createdAt: this.state.createdAt.valueOf(),
        phrases: this.state.phrases,
        language: this.state.language
      });

    }
  render() {
    return (
      <div className="content-container">
          <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}

          <input
            type="text"
            maxlength="20"
            autoFocus
            value={this.state.word}
            onChange={this.onWordChange}
          ></input>
          <input
            type="text"
            maxlength="20"
            placeholder="Tradução"
            value={this.state.translation}
            onChange={this.onTranslationChange}
          />
          <textarea
            value={this.state.phrases}
            onChange={this.onPhrasesChange}
          ></textarea>
          
          <div>
            <button className="button">Salvar Vocabulário</button>
          </div>

        </form>

      </div>
    )
  }
}

