import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleLabel } from './Filter.styled';

class Filter extends Component {
  onFilterInput = e => {
    const filter = e.target.value.trim();
    this.props.updateFilter(filter);
  };

  render() {
    return (
      <div>
        <StyleLabel htmlFor="filter">Find contacts by name</StyleLabel>
        <input type="text" id="filter" onChange={this.onFilterInput} />
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterInput: PropTypes.func,
};

export default Filter;
