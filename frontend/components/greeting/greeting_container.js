import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
    // const userId = state.session.id;
    // const currentUser = state.entities.users[userId];
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
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));