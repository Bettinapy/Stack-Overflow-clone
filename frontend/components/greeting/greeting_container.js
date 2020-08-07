import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import {withRouter} from 'react-router';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    const queryString = require('query-string');
    const search = (typeof queryString.parse(ownProps.location.search).q !== 'undefined' ? (
        queryString.parse(ownProps.location.search).q
    ):(''))
  
    return {
        currentUser: state.session,
        search: search
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        logout: () => dispatch(logout()),
        login: (user) => dispatch(login(user))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));