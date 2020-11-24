import { Promotypes } from '../../constants'
import Product from 'DTOS/product'
import React from 'react'
import styles from './styles.module.scss'

interface FilterProps {
    Products: Array<Product>,
    ApplyFilter:(fieldName:string,value:number,isTrue:Boolean)=>void
}
export default (props: FilterProps) => {

    const { Products ,ApplyFilter} = props

    return <div className={styles['filter-checkBoxes']}>
        {
            Object.values(Promotypes).map(value=>{
              return <div className={styles['filter-row']}> <input onChange={event=>ApplyFilter('promo',value.id,event.currentTarget.checked)} type='checkbox' className={styles['checkBox-item']}/>{value.textValue} <div className={styles['result-count']}>{Products.filter(p=>p.promo===value.id).length} </div> </div>
            })
        }
    </div>

}