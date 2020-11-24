import Product from 'DTOS/product'
import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import ProductViewer from '../../components/ProductViewer'
import ProductFilterControl from '../../components/ProductsFilterControl'
import styles from './styles.module.scss'
import Products from '../../data/products.json'

interface ProductsPageProps {
    products: Array<Product>
}

export default (props: ProductsPageProps) => {

    const [filterFields,setFilterFields]=useState([])

    const [products, setProducts] = useState(props.products)

    const ApplyFilter = (fieldName: string, value: number, isTrue: Boolean) => {

        setFilterFields(isTrue ? [{ fieldName, value }, ...filterFields] : filterFields.filter(f => (f.fieldName == fieldName && f.value != value)))
    }

    useEffect(()=>{

        if (filterFields.length) {
            setProducts(Products.reduce((acc, element) => {

                let isMatched = filterFields.reduce((isMatch, f) => isMatch || element[f.fieldName] == f.value, false)

                if (isMatched) {
                    acc.push(element)
                }
                return acc
            }, []))
        }
        else {
            setProducts(Products)
        }

    },[filterFields])



    return <div className={styles['container']}>
        <div className={styles['filter-section']}>
            <div className={styles['filter-title']}>
                <FormattedMessage id='messages.filter' />
            </div>
            <ProductFilterControl ApplyFilter={ApplyFilter} Products={Products} />
        </div>
        <div className={styles['products-section']}>{products.map(product => <div className={styles['product-viewer']}><ProductViewer product={product} /></div>)}</div>
    </div>
}