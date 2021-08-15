import { combineReducers }    from 'redux';
import accountReducer         from './accountData/accountReducer';
import visitorsReducer        from './visitorsData/visitorsReducer';
import redirectedIPsReducer   from './redirectedIPsData/redirectedIPsReducer';
import redirectToReducer   from './redirectToData/redirectToReducer';
import filtersRedirectedIPsReducer    from './filtersRedirectedIPs/filtersRedirectedIPsReducer';
import filtersVisitorsReducer         from './filtersVisitors/filtersVisitorsReducer';

const rootReducer = combineReducers({
  accountReducer,
  visitorsReducer,
  redirectedIPsReducer,
  redirectToReducer,
  filtersRedirectedIPsReducer,
  filtersVisitorsReducer,
});

export default rootReducer;
