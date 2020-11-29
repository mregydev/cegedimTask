import { FILTER_FIELD, FILTER_PRODUCTS, FITLER_CRITERIA_FETCHED, PRODUCTS_FETCHED, PRODUCT_ACTION_TYPES, SHOW_FILTER_LOADING, SHOW_PRODUCTS_LOADING } from "actions/productActions/types";
import Product from "DTOS/product";

interface ProductsState {
    allProducts: Array<Product>,
    filterFields: Array<FILTER_FIELD>,
    filteredProducts: Array<Product>,
    isProductLoading: Boolean,
    isFilterLoading: Boolean,
    productsErrorMessage: string,
    filterErrorMessage: string,
    filterCritierias: any
}

const intialValue: ProductsState = {
    allProducts: [],
    filterFields: [],
    filteredProducts: [],
    isProductLoading: false,
    isFilterLoading: false,
    productsErrorMessage: "",
    filterErrorMessage: "",
    filterCritierias: []
}

export const ProductReducer= (state: ProductsState = intialValue, actions: PRODUCT_ACTION_TYPES) => {

    switch (actions.type) {
        case SHOW_FILTER_LOADING:
            return { ...state, isFilterLoading: true }

        case SHOW_PRODUCTS_LOADING:
            return { ...state, isProductLoading: true }

        case PRODUCTS_FETCHED:
            return { ...state, isProductLoading: false, allProducts: actions.products, filteredProducts: actions.products, productsErrorMessage: "" }

        case FITLER_CRITERIA_FETCHED:
            return { ...state, isFilterLoading: false, filterCritierias: actions.criterias, filterErrorMessage: "" }

        case FILTER_PRODUCTS:
            {
                debugger
                let filterFields = extractFilterFields(state.filterFields, actions.filterField)
                let filteredProducts = extractFilteredProducts(filterFields, state.allProducts)
                return { ...state, filteredProducts, filterFields }
            }

        default:
            return state
    }
}

function extractFilteredProducts(filterFields, allProducts) {
    let products = []

    if (filterFields.length) {

        products = allProducts.reduce((acc, element) => {
            let isMatched = filterFields.reduce((isMatch, f) => isMatch && (f.isRange ? element[f.fieldName] >= f.value : element[f.fieldName] == f.value.id), true)

            if (isMatched) {
                acc.push(element)
            }
            return acc
        }, [])
    }
    else {
        products = allProducts
    }

    return products
}

function extractFilterFields(filterFields, filterField) {
    let { isChecked, fieldName, value } = filterField

    if (filterField.isRange) {
        if (filterFields.findIndex(f => f.fieldName === fieldName) === -1) {
            filterFields = [filterField, ...filterFields]
        }
        else {
            filterFields = filterFields.map(f => {

                if (f.fieldName === fieldName) {
                    f.value = value
                }
                return f;
            })
        }
    }
    else {
        filterFields = isChecked ? [{ fieldName, value }, ...filterFields] : filterFields.filter(f => (f.fieldName !== fieldName || (f.fieldName == fieldName && f.value != value)))
    }

    return filterFields
}