import React, { Component } from 'react'

import ProductCard   from './product/ProductCard'

export default class Catalog extends Component {
  render(){
    const products = this.props.products

    const template = products.map(function (product, index) {
        return <ProductCard key={index} data={product}/>
      }
    );

    return <div>{template}</div>
  }
}
