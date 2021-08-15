import { connect } from 'react-redux';
import VisitorsSection from './VisitorsSection';
import {setVisitors} from './../../store/visitorsData/visitorsAction';
import {setFiltersVisitors} from './../../store/filtersVisitors/filtersVisitorsAction';

const mapStateToProps = state => {
  return {
    tableData: state.visitorsReducer,
    filters: state.filtersVisitorsReducer.filters
  }
};

const mapDispatchToProps = {
  setVisitors,
  setFiltersVisitors,
};

const VisitorsSectionContainer = connect(mapStateToProps, mapDispatchToProps)(VisitorsSection);

export default VisitorsSectionContainer;
 