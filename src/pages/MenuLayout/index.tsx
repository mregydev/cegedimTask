import React from 'react'
import MenuLayout from './MenuLayout'

import Products from '../../data/products.json'

export default ()=>{
    return <div><MenuLayout products={Products}/></div>
}