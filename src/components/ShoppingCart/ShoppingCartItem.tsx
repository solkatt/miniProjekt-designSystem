import React, { Component, CSSProperties } from 'react'
import { Product } from '../../App'
import DeleteIcon from 'material-ui/svg-icons/action/delete';

import IconButton from 'material-ui/IconButton';
import { CartConsumer } from '../../contexts/CartContext';


interface ShoppingCartProps {
    product: Product
    count: number
}

class ShoppingCartItem extends Component<ShoppingCartProps> {

    render() {

     
       
        const { name, price, image} = this.props.product
        return (

            <CartConsumer> 
                {(cartState) => (

                    <div style={ShoppingCartItemStyle}>
                    <img alt='product' style={ShoppingCartItemImage} src={image} />
                    <h4>{name} </h4>
                    <div style={ShoppingCartItemText}>
                    <IconButton><DeleteIcon color="black" onClick={() => {cartState.deleteFromCart(this.props.product)}}/></IconButton>

                        <h5>{price * this.props.count}:-</h5>
                        <h5>Antal: {this.props.count}</h5>

                    </div>


                </div>


        )}
                </CartConsumer>
        )

      
    }

}


export default ShoppingCartItem

const ShoppingCartItemStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}

const ShoppingCartItemImage: CSSProperties = {
    width: '80px',
    height: '80px'
}

const ShoppingCartItemText: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
}