import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

// get ownProps from Route in App.jsx
const mapStateToProps = (state, ownProps) => {
   
    return {
        errors: state.errors.session.session_error,
        formType: 'signup',
    }
}

const mapDispatchToProps = (dispatch) => {
  
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);