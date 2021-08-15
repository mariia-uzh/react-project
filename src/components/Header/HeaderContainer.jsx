import { connect } from 'react-redux';
import Header from './Header';
import {setAccount, resetAccount} from './../../store/accountData/accountAction';


const mapStateToProps = state => {
  return {
    account: state.accountReducer.account,
  }
};

const mapDispatchToProps = {
  setAccount,
  resetAccount
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
