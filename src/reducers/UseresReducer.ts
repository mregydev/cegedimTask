import { PROBLEM_IN_FETCHING, SHOW_LOGIN_LOADING, USERACTIONTYPES, USER_DATA_CHEHED } from "actions/userActions/types";

export interface UserReducerState {
    isLoginLoading: Boolean,
    isLoginValid: Boolean,
    isLoginNotValid: Boolean,
    errorMessage: string
}

const intialValue: UserReducerState = {
    isLoginLoading: false,
    isLoginNotValid: false,
    isLoginValid: false,
    errorMessage: ""
}

export const UserReducer = (state: UserReducerState = intialValue, action: USERACTIONTYPES) => {

    switch (action.type) {
        case SHOW_LOGIN_LOADING:
            return { ...state, isLoginLoading: true,errorMessage:"",isLoginValid:false,isLoginNotValid:false }

        case PROBLEM_IN_FETCHING:
            return { ...state, errorMessage: action.message,isLoginLoading:false }
        case USER_DATA_CHEHED:

            let isLoginValid=false
            let isLoginNotValid=true

            if(action.result.isValid)
            {
                isLoginValid=true
                isLoginNotValid=false
                sessionStorage.setItem('accessToken',action.result.token)
            }
            return {...state,isLoginValid,isLoginNotValid,errorMessage:"",isLoginLoading:false}

        default:
            return state
    }
}