import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
const mapStateToProps = (state) => {

    const userId = state.session.id;
    const currentUser = state.entities.users[userId];
    return {
        currentUser,
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);