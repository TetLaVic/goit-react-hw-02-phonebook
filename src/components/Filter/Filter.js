import { Component } from 'react';
import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    const filterInputId = genId();
    const { filterState, onFilterChange } = this.props;
    return (
      <label htmlFor={filterInputId} className={styles.labelFilter}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          id={filterInputId}
          value={filterState}
          onChange={onFilterChange}
          className={styles.inputFilter}
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
