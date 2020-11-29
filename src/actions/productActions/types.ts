import Product from "DTOS/product"

export const PRODUCTS_FETCHED = "PRODUCTS_FETCHED"
export const FITLER_CRITERIA_FETCHED = "FITLER_CRITERIA_FETCHED"
export const SHOW_PRODUCTS_LOADING = "SHOW_PRODUCTS_LOADING"
export const PROBLEM_FETCHING_PRODUCTS = "PROBLEM_FETCHING_PRODUCTS"
export const SHOW_FILTER_LOADING = "SHOW_FILTER_LOADING"
export const PROBLEM_FETCHING_CRITERIA = "PROBLEM_FETCHING_CRITERIA"
export const FILTER_PRODUCTS = "FILTER_PRODUCTS"


export interface FILTER_FIELD {
    fieldName: string,
    value: any,
    isRange: Boolean,
    isChecked: Boolean
}

export interface Actions_FILTER_PRODUCTS {
    type: typeof FILTER_PRODUCTS,
    filterField: FILTER_FIELD
}

export interface Actions_PRODUCTS_FETCHED {
    type: typeof PRODUCTS_FETCHED,
    products: Array<Product>
}

export interface Actions_FITLER_CRITERIA_FETCHED {
    type: typeof FITLER_CRITERIA_FETCHED,
    criterias: any
}

export interface Actions_SHOW_PRODUCTS_LOADING {
    type: typeof SHOW_PRODUCTS_LOADING
}

export interface Actions_PROBLEM_FETCHING_PRODUCTS {
    type: typeof PROBLEM_FETCHING_PRODUCTS,
    errorMessage: string
}

export interface Actions_SHOW_FILTER_LOADING {
    type: typeof SHOW_FILTER_LOADING
}

export interface Actions_PROBLEM_FETCHING_CRITERIA {
    type: typeof PROBLEM_FETCHING_CRITERIA,
    errorMessage: string
}


export type PRODUCT_ACTION_TYPES = Actions_PRODUCTS_FETCHED | Actions_FITLER_CRITERIA_FETCHED | Actions_SHOW_PRODUCTS_LOADING | Actions_PROBLEM_FETCHING_PRODUCTS | Actions_SHOW_FILTER_LOADING | Actions_PROBLEM_FETCHING_CRITERIA | Actions_FILTER_PRODUCTS
