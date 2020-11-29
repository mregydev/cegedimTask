import React from 'react'
import Product from 'DTOS/product'
import styles from './styles.module.scss'
interface ProductViewerProps {
    product: Product
}

export default (props: ProductViewerProps) => {

    const { product } = props

    return <div className={styles['product-container']}>
        <div className={styles['product-price']}>
            {new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(product.price)}
        </div>
        <div className={styles['product-logo']}>
            <div className={styles['circle-style']}>

            </div>
        </div>

        <div className={styles['product-details']}>
            <div className={styles['product-title']}>{product.title}</div>
            <div className={styles['product-description']}>this is a description</div>
            <div className={styles['product-promo-type']}>
                <span className={styles['product-promo']}>{product.promoText}</span>
                <span className={styles['product-type']}>{product.typeText}</span>
            </div>
            <div className={styles['product-origin']}>{product.language}</div>
        </div>
    </div>
}