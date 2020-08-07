import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {

    const answers = Object.values(state.entities.answers);
    const questions = Object.values(state.entities.questions);

    return {
        currentUser: state.session || {display_name:'', email: ''},
        answers: answers || [],
        questions: questions || []
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        logout: () => dispatch(logout()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);