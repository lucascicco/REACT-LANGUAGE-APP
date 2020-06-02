import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate } from '../actions/filters';

export class VocabularyListFilter extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === "date") {
        this.props.sortByDate();
        console.log('date')
    } else {
        console.log('nothing')
    }
  };
  render() {
    return (
      <div>
        <div>
          <div>
            <input
              type="text"
              className="text-input"
              placeholder="Buscar vocabulário"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div>
            <select
              className="select"
              onChange={this.onSortChange}
              value={this.props.filters.sortBy}
            >
              <option value=""></option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate())
});

export default connect(mapStateToProps, mapDispatchToProps)(VocabularyListFilter);
