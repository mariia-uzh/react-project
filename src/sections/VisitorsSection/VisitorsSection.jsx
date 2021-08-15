import React, { Component } from 'react';
import axios from 'axios';
import Heading from './../../components/Heading/Heading';
import TableHeading from './../../components/Table/TableHeading';
import TableVisitorsRow     from './../../components/Table/TableVisitorsRow';
import PaginationVisitors from './../../components/Pagination/PaginationVisitors';
import './../../components/Table/Table.scss';
import './VisitorsSection.scss';

class VisitorsSection extends Component {

  constructor (props) {
    super(props);

    this.state = {
      tableHeading: [
        {
          "name":     "Time"
        },
        {
          "name":     "IP address"
        },
        {
          "name":     "Country code"
        },
        {
          "name":     "Region"
        },
        {
          "name":     "City"
        },
        {
          "name":     "ISP"
        },
        {
          "name":     "Domain"
        },
        {
          "name":     "Referrer"
        },
        {
          "name":     "Enter page"
        }
      ]
    }

    this.updateData =       this.updateData.bind(this);
    this.setDataToReducer = this.setDataToReducer.bind(this);
  }

  setDataToReducer(filters) {
    this.props.setFiltersVisitors(
      filters
    );
  }

  updateData () {
    axios.get('/ip/json/redirectedIPs__update.json', {
      params: this.props.filters
    }) 
    .then((response) => {
      if (response.data.status == 200) {
        this.props.setVisitors(response.data);
      }
    })
    .catch(function (error) {
      alert('Error: ' + error);
      console.log('Error: ' + error);
    });
  }

  componentDidMount () {

    axios.get('/ip/json/visitors.json', {
      params: this.props.filters
    })
    .then((response) => {
      if (response.data.status == 200) {
        this.props.setVisitors(response.data);
      }
    })
    .catch(function (error) {
      alert('Error: ' + error);
      console.log('Error: ' + error);
    });
  }

  componentDidUpdate(prevProps) {
    for (let filter in this.props.filters) {
      if (this.props.filters[filter] !== prevProps.filters[filter]) {
        this.updateData();
        return true;
      }
    }
  }

  render() {

    return (
      <div className="Container">
        <div className="VisitorsSection">
          <Heading text="visitors" />
          <div className="Table__wrapper">
            <div className="Table__overflow">
              <table className="Table">
                <thead>
                  <TableHeading tableHeading={this.state.tableHeading} />
                </thead>
                <tbody>
                {
                  this.props.tableData.visitors.length ?
                  this.props.tableData.visitors.map((tableCol, k) => {
                    return (<TableVisitorsRow key={k} tableCol={tableCol} />)
                  })
                  : null
                }
                </tbody>
              </table>
            </div>
            <PaginationVisitors
              pagination={this.props.tableData.pagination}
              filters={this.props.filters}
              onClick={this.setDataToReducer}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VisitorsSection;
