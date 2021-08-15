import { connect } from 'react-redux';
import LogInSection from './LogInSection';
import {setAccount} from './../../store/accountData/accountAction';

const mapDispatchToProps = {
  setAccount
};

const LogInSectionContainer = connect(null, mapDispatchToProps)(LogInSection);

export default LogInSectionContainer;
 