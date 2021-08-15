import React, { Component } from 'react';

class TableCol extends Component {

  render () {

    let { name } = this.props.tableCol;

    return (
      <td className="TableCol">
        { name }
      </td>
    );
  }
}

export default TableCol;