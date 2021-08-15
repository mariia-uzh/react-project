import React, { Component } from 'react';
import axios from 'axios';
import ModalAddIP         from './../../components/Modal/ModalAddIP';
import ModalFilter        from './../../components/Modal/ModalFilter';
import Heading            from './../../components/Heading/Heading';
import BtnSecondary       from './../../components/Btn/BtnSecondary';
import Btn          from '../../components/Btn/Btn';
import InputWithLabel     from './../../components/Inputs/InputWithLabel';
import TableHeading       from './../../components/Table/TableHeading';
import TableRedirectedIPsRow from './../../components/Table/TableRedirectedIPsRow';
import PaginationRedirectedIPs from './../../components/Pagination/PaginationRedirectedIPs';
import './../../components/Table/Table.scss';
import './RedirectedIPsSection.scss';

class RedirectedIPsSection extends Component {

  constructor (props) {
    super(props);

    this.state = {
      redirectTo: this.props.redirectTo,
      tableHeading: [
        {
          "name":     "IP from"
        },
        {
          "name":     "IP to"
        },
        {
          "name":     "Country code"
        },
        {
          "name":     "Country"
        },
        {
          "name":     "Region"
        },
        {
          "name":     "City"
        },
        {
          "name":     "Latitude"
        },
        {
          "name":     "Longitude"
        },
        {
          "name":     "Zip code"
        },
        {
          "name":     "ISP"
        },
        {
          "name":     "Domain"
        }
      ],
      modalAddVisible:    false,
      modalFilterVisible: false
    }

    this.displayModal =     this.displayModal.bind(this);
    this.deleteFiltered =   this.deleteFiltered.bind(this);
    this.updateData =       this.updateData.bind(this);
    this.setDataToReducer = this.setDataToReducer.bind(this);
    this.setDataToField =   this.setDataToField.bind(this);
    this.sendData =         this.sendData.bind(this);
  }

  displayModal (modalName) {
    this.setState((state) => {
      state[modalName] = !state[modalName];

      return state;
    })
  }

  setDataToReducer(filters) {
    this.props.setFilters(
      filters
    );
  }

  deleteFiltered () {
    axios.get('/ip/json/send-data.json', {
      params: this.props.filters
    })
    .then((response) => {
      if (response.data.status == 200) {

        this.props.resetFilters();

      }
    })
    .catch(function (error) {
      alert('Error: ' + error);
      console.log('Error: ' + error);
    });
  }

  updateData () {
    axios.get('/ip/json/redirectedIPs__update.json', {
      params: this.props.filters
    }) 
    .then((response) => {
      if (response.data.status == 200) {
        this.props.setRedirectedIPs(response.data);
      }
    })
    .catch(function (error) {
      alert('Error: ' + error);
      console.log('Error: ' + error);
    });
  }

  setDataToField(name, value) {
    this.setState(state => {
      state[name] = value;
      return state;
    });
  }

  sendData() {
    axios.get('/ip/json/send-data.json', {
      params: {redirectTo : this.state.redirectTo}
    })
    .then((response) => {
      if (response.data.status == 200) {
        
      }
    })
    .catch(function (error) {
      alert('Error: ' + error);
      console.log('Error: ' + error);
    });
  }

  componentDidMount () {

    axios.get('/ip/json/redirectedIPs.json', {
      params: this.props.filters
    })
    .then((response) => {
      if (response.data.status == 200) {
        this.props.setRedirectedIPs(response.data);
      }
    })
    .catch(function (error) {
      alert('Error: ' + error);
      console.log('Error: ' + error);
    });

    axios.get('/ip/json/redirectTo.json', {
      params: this.props.redirectTo
    })
    .then((response) => {
      if (response.data.status == 200) {
        this.props.setRedirectTo(response.data);
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
        break;
      }
    }

    if (this.props.redirectTo !== prevProps.redirectTo) {

      this.setState(state => {
        state.redirectTo = this.props.redirectTo;
        return state;
      });
    }
  }

  render() {

    return (
      <>
        <div className="Container">
          <div className="RedirectedIPsSection">
            <div className="Section__row">
              <Heading text="Redirected IPs" />
              <BtnSecondary 
                name="Add IP"
                icon="icon-add"
                openModal={ () => this.displayModal('modalAddVisible')} 
              />
            </div>
            <div className="Section__row">
              <div className="Section__col">
                <BtnSecondary 
                  name="Filter"
                  icon="icon-filter"
                  openModal={ () => this.displayModal('modalFilterVisible')} 
                />
                <Btn
                  classes="Btn_thirdly"
                  name="Clear filter"
                  onClick={this.props.resetFilters}
                />
                <Btn
                  classes="Btn_primary"
                  name="Delete filtered"
                  onClick={this.deleteFiltered}
                />
              </div>
              <div className="Section__col">
                <form className="Form">
                  <InputWithLabel
                    label="Redirect to:"
                    type="text"
                    placeholder=""
                    name="redirectTo"
                    value={this.state.redirectTo}
                    setValue={this.setDataToField}
                  />
                  <Btn
                    classes="Btn_primary"
                    name="Save"
                    onClick={this.sendData}
                  />
                </form>
              </div>
            </div>
            <div className="Table__wrapper">
              <div className="Table__overflow"> 
                <table className="Table">
                  <thead>
                    <TableHeading tableHeading={this.state.tableHeading} />
                  </thead>
                  <tbody>
                  {
                    this.props.tableData.redirectedIPs.length ?
                    this.props.tableData.redirectedIPs.map((tableCol, k) => {
                      return (<TableRedirectedIPsRow key={k} tableCol={tableCol} />)
                    })
                    : null
                  }
                  </tbody>
                </table>
              </div>
              <PaginationRedirectedIPs
                pagination={this.props.tableData.pagination}
                filters={this.props.filters}
                onClick={this.setDataToReducer}
              />
            </div>
          </div>
        </div>
        {
          this.state.modalFilterVisible ?
          <ModalFilter
            onClick={() => this.displayModal('modalFilterVisible')}
            filters={this.props.filters}
            setDataToReducer={this.setDataToReducer}
          />
          :
          (
          this.state.modalAddVisible ?
          <ModalAddIP
            onClick={() => this.displayModal('modalAddVisible')}
            filters={this.props.filters}
            setDataToReducer={this.setDataToReducer}
          />
          :
          null
          )
        }
      </>
    );
  }
}

export default RedirectedIPsSection;
