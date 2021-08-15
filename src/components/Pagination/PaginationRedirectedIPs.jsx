import React, { Component } from 'react';
import './Pagination.scss';

class PaginationRedirectedIPs extends Component {

  constructor (props) {
    super(props);
    
    this.sendData = this.sendData.bind(this);

  }

  sendData(value) {
    
    this.props.onClick({
      filters: {
        ...this.props.filters, 
        current_page : value
      }
    });
  }

  render () {

    let { total, per_page } = this.props.pagination;
    let { current_page } = this.props.filters;
    let two_next_page = (current_page + 2);
    let next_page = (current_page + 1);
    let prev_page = (current_page - 1);
    let two_prev_page = (current_page - 2);
    let first_page = 1;
    let last_page = (total / per_page);

    if ( (total % per_page) != 0 ) {
      last_page = ( Math.ceil(total / per_page));
    }
  
    return (
      <>
        {
          (last_page > 1) ?
          <div className="Pagination__wrapper">
            <ul className="Pagination">

              <li className={"PageItem" + (current_page != 1 ? '' : ' disabled')}>
                <div className="PageLink" 
                  onClick={() => { this.sendData(first_page)}}
                >
                  First
                </div>
              </li>

              <li className={"PageItem" + (prev_page == 0 ? ' disabled' : '')}>
                <div className="PageLink PageLink_prev" 
                  onClick={() => { this.sendData(prev_page)}}
                >
                  <span className="icon icon-arrow-left"></span>
                  Prev
                </div>
              </li> 

              <li className={"PageItem d-none-md" + ( (two_prev_page < 2) ? ' hidden' : '')}>
                <div className="PageLink" 
                  onClick={() => { this.sendData(two_prev_page)}}
                >
                  .&nbsp;.&nbsp;.
                </div>
              </li>

              <li className={"PageItem PageItem_number d-none-sm" + (two_prev_page <= 0 ? ' hidden' : '')}>
                <div className="PageLink PageLink_number" 
                  onClick={() => { this.sendData(two_prev_page)}}
                >
                  {two_prev_page}
                </div>
              </li>

              <li className={"PageItem PageItem_number d-none-sm" + ((prev_page == current_page || prev_page <= 0) ? ' hidden' : '')}>
                <div className="PageLink PageLink_number" 
                  onClick={() => { this.sendData(prev_page)}}
                >
                  {prev_page}
                </div>
              </li>

              <li className="PageItem PageItem_number active">
                <div className="PageLink PageLink_number" 
                  onClick={() => { this.sendData(current_page)}}
                >
                  {current_page}
                </div>
              </li>

              <li className={"PageItem PageItem_number d-none-sm" + (next_page > last_page ? ' hidden' : '')}>
                <div className="PageLink PageLink_number" 
                  onClick={() => { this.sendData(next_page)}}
                >
                  {next_page}
                </div>
              </li>

              <li className={"PageItem PageItem_number d-none-sm" + (two_next_page > last_page ? ' hidden' : '')}>
                <div className="PageLink PageLink_number" 
                  onClick={() => { this.sendData(two_next_page)}}
                >
                  {two_next_page}
                </div>
              </li>

              <li className={"PageItem d-none-md" + ( two_next_page >= last_page ? ' hidden' : '')}>
                <div className="PageLink" 
                  onClick={() => { this.sendData(two_next_page)}}
                >
                  .&nbsp;.&nbsp;.
                </div>
              </li>

              <li className={"PageItem" + (next_page > last_page ? ' disabled' : '')}>
                <div className="PageLink PageLink_next" 
                  onClick={() => { this.sendData(next_page)}}
                >
                  Next
                  <span className="icon icon-arrow-right"></span>
                </div>
              </li>

              <li className={"PageItem" + (current_page == last_page ? ' disabled' : '')}>
                <div className="PageLink" 
                  onClick={() => { this.sendData(last_page)}}
                >
                  Last
                </div>
              </li>

            </ul>
          </div>
          :
          null
        }
       
      </> 
    );
  }
}

export default PaginationRedirectedIPs;