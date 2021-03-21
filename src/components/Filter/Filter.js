import { Component } from 'react';
import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const filterInputId = genId();
    const { filterState, onFilterChange } = this.props;
    return (
      <label htmlFor={filterInputId}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          id={filterInputId}
          value={filterState}
          onChange={onFilterChange}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.string,
  onFilterChange: PropTypes.func,
};

export default Filter;
