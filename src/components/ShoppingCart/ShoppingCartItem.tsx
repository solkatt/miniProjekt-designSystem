import React, { Component, CSSProperties } from 'react'
import { Product } from '../../App'


interface ShoppingCartProps {
    product: Product
    count: number
}

class ShoppingCartItem extends Component<ShoppingCartProps> {

  render(){
      const { name, price, image } = this.props.product
      return(
          <>
          <div style={ShoppingCartItemStyle}>
             <h4>{name} </h4>
              <h5>{price} :-</h5>
              <img style={ShoppingCartItemImage}src={image}/>
         
          </div>
           <hr></hr>
           </>
      )
  }
}


export default ShoppingCartItem

const ShoppingCartItemStyle: CSSProperties = {
    width: '150px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}

const ShoppingCartItemImage: CSSProperties = {
    width: '80px',
    height: '80px'
}