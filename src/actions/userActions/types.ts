export const FILTER_PRODUCTS = "FILTER_PRODUCTS"
export const CHECK_USER_DATA = "CHECK_USER_DATA"
export const USER_DATA_CHEHED = "CHECK_USER_DATA"
export const PROBLEM_IN_FETCHING = "PROBLEM_IN_FETCHING"
export const SHOW_LOGIN_LOADING = "SHOW_LOGIN_LOADING"

export interface USERCREDENTIALS {
    userName: string,
    password: string
}

export interface LoginResult
{
    token:string,
    isValid:Boolean
}

export interface Action_USER_DATA_CHECKED {
    type: typeof USER_DATA_CHEHED,
    result: LoginResult
}

export interface Action_SHOW_LOGIN_LOAding {
    type: typeof SHOW_LOGIN_LOADING
}

export interface Action_PROBLEM_IN_FETCHING
{
    type:typeof PROBLEM_IN_FETCHING,
    message:string
}

export type USERACTIONTYPES = Action_USER_DATA_CHECKED | Action_SHOW_LOGIN_LOAding |Action_PROBLEM_IN_FETCHING