import Product from 'DTOS/product'
import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import ProductViewer from '../../components/ProductViewer'
import ProductFilterControl from '../../components/ProductsFilterControl'
import styles from './styles.module.scss'
import Loading from '../../components/common/Loding'

interface ProductsPageProps {

    products: Array<Product>,
    errorMessage: string,
    isLoading: Boolean,
    fetchAllProduct: () => void
}

export default (props: ProductsPageProps) => {

    const { products, errorMessage,isLoading, fetchAllProduct } = props


    useEffect(() => {
        if(errorMessage)
        alert(errorMessage)
    }, [errorMessage])

    useEffect(() => {
        fetchAllProduct()
    }, [])

    return <div className={styles['main-container']}>
        <Loading isShown={isLoading} />
    <div className={styles['list-container']}>
        <div className={styles['filter-section']}>
            <div className={styles['filter-title']}>
                <FormattedMessage id='messages.filter' />
            </div>
            <ProductFilterControl />
        </div>
        <div className={styles['products-section']}>{products.map(product => <div className={styles['product-viewer']}><ProductViewer product={product} /></div>)}</div>
    </div>
    </div>
}