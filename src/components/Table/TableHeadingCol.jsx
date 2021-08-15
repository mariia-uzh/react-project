import React, { Component } from 'react';

class TableHeadingCol extends Component {

  render () {

    let { name } = this.props.tableCol;

    return (
      <th className="TableCol">
        { name }
      </th>
    );
  }
}

export default TableHeadingCol;