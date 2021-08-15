import React, { Component } from 'react';

class TableRedirectedIPsRow extends Component {

  render () {

    let { ipFrom, ipTo, countryCode, country, region, city, latitude, longitude, zipCode, ISP, domain} = this.props.tableCol;

    return (
      <tr className="TableRow">
        <td className="TableCol">
          {ipFrom}
        </td>
        <td className="TableCol">
          {ipTo}
        </td>
        <td className="TableCol">
          {countryCode}
        </td>
        <td className="TableCol">
          {country}
        </td>
        <td className="TableCol">
          {region}
        </td>
        <td className="TableCol">
          {city}
        </td>
        <td className="TableCol">
          {latitude}
        </td>
        <td className="TableCol">
          {longitude}
        </td>
        <td className="TableCol">
          {zipCode}
        </td>
        <td className="TableCol">
          {ISP}
        </td>
        <td className="TableCol">
          {domain}
        </td>
      </tr>
    );
  }
}

export default TableRedirectedIPsRow;