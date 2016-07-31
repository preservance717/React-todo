import React, { Component, PropTypes } from 'react';

const divStyle={
  position: 'absolute',
  right: '500px',
  top: '300px',
  color:'gray'
};

export default class Footer extends Component {
  renderFilter(filter, name) {
    if(filter == this.props.filter) {
      return name;
    }
    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }}>
        {name}
      </a>
    );
  }

  render() {
    return (
        <div style={divStyle}>
      <p>
          <h4>
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
          </h4>
        <h4>
        {' '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        </h4>
        <h4>
        {' '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        </h4>

      </p>
          </div>
    );
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};
