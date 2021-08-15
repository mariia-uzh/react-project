import { connect } from 'react-redux';
import RedirectedIPsSection from './RedirectedIPsSection';
import {setRedirectedIPs} from './../../store/redirectedIPsData/redirectedIPsAction';
import {setRedirectTo} from './../../store/redirectToData/redirectToAction';
import {setFilters, resetFilters} from './../../store/filtersRedirectedIPs/filtersRedirectedIPsAction';

const mapStateToProps = state => {
  return {
    tableData: state.redirectedIPsReducer,
    filters: state.filtersRedirectedIPsReducer.filters,
    redirectTo: state.redirectToReducer.redirectTo
  }
};

const mapDispatchToProps = {
  setRedirectedIPs,
  setRedirectTo,
  setFilters,
  resetFilters
};

const RedirectedIPsSectionContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectedIPsSection);

export default RedirectedIPsSectionContainer;
 