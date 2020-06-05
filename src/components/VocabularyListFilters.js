import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class VocabularyListFilter extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <div className="content-container-input">
          <div>
            <input
                type="text"
                maxlength="20"
                className="input-language"
                placeholder="Buscar vocabulário"
                value={this.props.filters.text}
                onChange={this.onTextChange}
              />
          </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(VocabularyListFilter);
