import Product from 'DTOS/product'
import React, { Fragment, useEffect } from 'react'
import styles from './styles.module.scss'
import Slider from '../common/Slider'
import { FILTER_FIELD } from 'actions/productActions/types'
import Loading from '../common/Loding'


interface FilterProps {
    products: Array<Product>,
    isLoading: Boolean,
    filterCritierias: any,
    errorMessage: string,
    fetchFIlterCriterias: () => void,
    filterProducts: (filterField: FILTER_FIELD) => void
}
export default (props: FilterProps) => {

    const { products, filterCritierias, errorMessage,isLoading, fetchFIlterCriterias, filterProducts } = props

    useEffect(() => {
        fetchFIlterCriterias()
    }, [])

    useEffect(() => {
        if(errorMessage)
        alert(errorMessage)
    }, [errorMessage])




    return <div className={styles['container']}>
        <Loading isShown={isLoading} />
        {filterCritierias.map((filterField, index) => <div id={`filterSection${index}`} className={styles['filter-sections']}>
            {
                <Fragment>
                    {filterField.Label ? <div className={styles['filter-section-title']}>{filterField.Label}</div> : null}
                    {filterField.type === 'checkBox' ?
                        filterField.values.map(value => {
                            return <div className={styles['filter-row']}><input onChange={event => filterProducts({ fieldName: filterField.FieldName, value, isRange: false, isChecked: event.currentTarget.checked })} type='checkbox' className={styles['checkBox-item']} />{value.textValue} <div className={styles['result-count']}>{products.filter(p => p[filterField.FieldName] === value.id).length} </div> </div>
                        }) :

                        filterField.type === 'range' ? <Slider
                            onChange={(_, newValue) => {
                                filterProducts({ fieldName: filterField.FieldName, value: (newValue as number), isRange: true, isChecked: false })
                            }
                            }
                            defaultValue={filterField["value"]}
                            aria-labelledby="discrete-slider-small-steps"
                            step={1}
                            marks
                            min={filterField.min}
                            max={filterField.max}
                            valueLabelDisplay="auto"
                            className={styles['slider']}
                        /> : null}
                </Fragment>
            }
        </div>)}
    </div>

}