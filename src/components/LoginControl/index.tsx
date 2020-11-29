
import { checkUserDate } from 'actions/userActions'
import { USERCREDENTIALS } from 'actions/userActions/types'
import { connect } from 'react-redux'
import LoginControl from './LoginControl'

const mapStateToProps = (state,props) => {
    return {
        isLoading: state.UserReducer.isLoginLoading,
        isLoginValid:state.UserReducer.isLoginValid,
        isLoginNotValid:state.UserReducer.isLoginNotValid,
        errorMessage:state.UserReducer.errorMessage,
        history:props.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ApplyLogin: (creadientials: USERCREDENTIALS) => dispatch(checkUserDate(creadientials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginControl)