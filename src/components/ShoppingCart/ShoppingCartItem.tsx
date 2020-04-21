import React, { Component, CSSProperties } from 'react'
import { Product } from '../../App'
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import AddShoppingCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';

import IconButton from 'material-ui/IconButton';
import { CartConsumer } from '../../contexts/CartContext';


interface ShoppingCartProps {
    product: Product
    count: number
}

class ShoppingCartItem extends Component<ShoppingCartProps> {

    render() {
        const { name, price, image } = this.props.product
        return (

            <CartConsumer>
                {(cartState) => (

                    <div style={ShoppingCartItemStyle}>

                        <div style={ShoppingCartTextPic}>
                            <img alt='product' style={ShoppingCartItemImage} src={image} />
                            <h4>{name} </h4>
                        </div>

                        <div style={ShoppingCartTextIcons}>

                            <div style={ShoppingCartPriceAmount}>
                                <h5 style={TextMargin}>Pris: {price * this.props.count}:-</h5>
                                <h5 style={TextMargin}>Antal: {this.props.count}</h5>
                            </div>

                            <div style={ShoppingCartIcons}>
                                <IconButton><AddShoppingCartIcon color="black" onClick={() => { cartState.addToCart(this.props.product) }} /></IconButton>
                                <IconButton><DeleteIcon color="black" onClick={() => { cartState.deleteFromCart(this.props.product) }} /></IconButton>
                            </div>

                        </div>


                    </div>


                )}
            </CartConsumer>
        )


    }

}


export default ShoppingCartItem

const ShoppingCartIcons: CSSProperties = {
    display: "flex",
}

const TextMargin: CSSProperties = {
    margin: "0.5rem"
}

const ShoppingCartPriceAmount: CSSProperties = {
    display: "flex",
}

const ShoppingCartTextPic: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    margin: "1rem"

}

const ShoppingCartItemStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const ShoppingCartItemImage: CSSProperties = {
    width: '80px',
    height: '80px'
}

const ShoppingCartTextIcons: CSSProperties = {
    display: 'flex',
    alignContent: 'center',
    alignItems: "center"
}