import React from 'react'
import Product from 'DTOS/product'
import styles from './styles.module.scss'
import {Promotypes} from '../../constants'
interface ProductViewerProps {
    product: Product
}

export default (props: ProductViewerProps) => {

    const {product} =props

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
           <span className={styles['product-promo']}>{Object.values(Promotypes).find(p=>p.id===product.promo).textValue}</span>
           <span className={styles['product-type']}>{product.type}</span>
           </div>
           <div className={styles['product-origin']}>{product.language}</div>
        </div>
    </div>
}