import { PROBLEM_IN_FETCHING } from 'actions/userActions/types'
import request from '../../helpers/request'
import { FITLER_CRITERIA_FETCHED, PROBLEM_FETCHING_CRITERIA, PRODUCTS_FETCHED, SHOW_PRODUCTS_LOADING, SHOW_FILTER_LOADING, FILTER_PRODUCTS } from './types'

export const fetcAllProduct = () => {
    return async (dispatch) => {

        dispatch({
            type: SHOW_PRODUCTS_LOADING
        })

        try {
            let products = await (await request(`${process.env['REACT_APP_BASE_URL']}/fetchAllProducts`, 'get', {},{'authorization':`Bearer ${sessionStorage['accessToken']}`})).data

            dispatch({
                type: PRODUCTS_FETCHED,
                products
            })
        }
        catch ({ message }) {
            dispatch({
                type: PROBLEM_IN_FETCHING,
                errorMessage: message
            })
        }
    }
}


export const fetchAllFilterCriteria = () => {

    return async (dispatch) => {

        dispatch({
            type: SHOW_FILTER_LOADING
        })
        try {
            let criterias = await (await request(`${process.env['REACT_APP_BASE_URL']}/fetchFilterCriterias`, 'get', {},{'authorization':`Bearer ${sessionStorage['accessToken']}`})).data

            dispatch({
                type: FITLER_CRITERIA_FETCHED,
                criterias
            })
        }
        catch ({ message }) {
            dispatch({
                type: PROBLEM_FETCHING_CRITERIA,
                errorMessage: message
            })
        }
    }
}

export const filterProducts = (filterField) => {
    return {
        type: FILTER_PRODUCTS,
        filterField
    }
}