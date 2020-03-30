import React, { Component, CSSProperties } from 'react'
import { Product } from '../../App'


interface ShoppingCartProps {
    product: Product
    count: number
}

class ShoppingCartItem extends Component<ShoppingCartProps> {

    render() {
        const { name, price, image } = this.props.product
        return (
            <>
                <div style={ShoppingCartItemStyle}>
                    <img style={ShoppingCartItemImage} src={image} />
                    <div style={ShoppingCartItemText}>
                        <h4>{name} </h4>
                        <h5>{price} :-</h5>
                    </div>


                </div>
                <hr></hr>
            </>
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
    flexDirection: 'column'
}