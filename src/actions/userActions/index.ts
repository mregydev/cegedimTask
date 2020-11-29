import request from '../../helpers/request'

import { PROBLEM_IN_FETCHING, SHOW_LOGIN_LOADING, USERCREDENTIALS, USER_DATA_CHEHED } from "./types"

export const checkUserDate = (data: USERCREDENTIALS) => {

    return async (dispatch) => {
        try {

            dispatch({
                type:SHOW_LOGIN_LOADING
            })

            let result = await (await request(`${process.env['REACT_APP_BASE_URL']}/login`, "post", data)).data

            dispatch({
                type: USER_DATA_CHEHED,
                result
            })
        }
        catch ({ message }) {

            dispatch({
                type: PROBLEM_IN_FETCHING,
                message
            })

        }
    }
}