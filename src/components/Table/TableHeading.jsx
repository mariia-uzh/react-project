import React, { Component } from 'react';
import TableHeadingCol from './TableHeadingCol';

class TableHeading extends Component {

  render () {

    return (
      <tr className="TableRow TableHeading">
        {
          this.props.tableHeading.length ?
          this.props.tableHeading.map((tableCol, k) => {
            return (<TableHeadingCol key={k} tableCol={tableCol} />)
          })
          : null
        }
      </tr>
    );
  }
}

export default TableHeading;