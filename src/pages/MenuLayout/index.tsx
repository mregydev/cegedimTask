import { connect } from 'react-redux'
import { fetcAllProduct } from 'actions/productActions'
import MenuLayout from './MenuLayout'

const mapStateToProps = (state) => {
    return {
        products: state.ProductReducer.filteredProducts,
        errorMessage: state.ProductReducer.productsErrorMessage,
        isLoading: state.ProductReducer.isProductLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProduct: () => dispatch(fetcAllProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuLayout)


