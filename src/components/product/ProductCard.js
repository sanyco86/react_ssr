import React, { Component } from 'react'

import Title   from './Title'
import TextBox from './TextBox'
import Image   from './Image'
import Price   from './Price'

export default class ProductCard extends Component {
  render(){
    const data = this.props.data;

    return(
      <div>
        <p><Title title={data.title} /></p>
        <Image img={data.img} />
        <TextBox text={data.text} />
        <p><Price price={data.price} />$</p>
        <button>Купить</button>
      </div>
    )
  }
}
