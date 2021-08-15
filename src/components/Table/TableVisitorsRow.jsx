import React, { Component } from 'react';

class TableVisitorsRow extends Component {

  render () {

    let { time, ip, countryCode, region, city, ISP, domain, referrer, enterPage} = this.props.tableCol;

    return (
      <tr className="TableRow">
        <td className="TableCol">
          {time}
        </td>
        <td className="TableCol">
          {ip}
        </td>
        <td className="TableCol">
          {countryCode}
        </td>
        <td className="TableCol">
          {region}
        </td>
        <td className="TableCol">
          {city}
        </td>
        <td className="TableCol">
          {ISP}
        </td>
        <td className="TableCol">
          {domain}
        </td>
        <td className="TableCol">
          {referrer}
        </td>
        <td className="TableCol">
          {enterPage}
        </td>
      </tr>
    );
  }
}

export default TableVisitorsRow;