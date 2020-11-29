import { fetchAllFilterCriteria, filterProducts } from 'actions/productActions'
import { FILTER_FIELD } from 'actions/productActions/types'
import { connect } from 'react-redux'
import FilterControl from './FiltercControl'

const mapStateToProps=(state)=>{
    
    return {
        products:state.ProductReducer.allProducts,
        isLoading:state.ProductReducer.isFilterLoading,
        filterCritierias:state.ProductReducer.filterCritierias,
        errorMessage:state.ProductReducer.filterErrorMessage
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        filterProducts:(filterField:FILTER_FIELD)=>dispatch(filterProducts(filterField)),
        fetchFIlterCriterias:()=>dispatch(fetchAllFilterCriteria())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterControl)