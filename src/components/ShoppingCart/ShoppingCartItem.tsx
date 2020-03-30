import React, { Component, CSSProperties } from 'react'
import { Product } from '../../App'
import DeleteIcon from 'material-ui/svg-icons/action/delete';

import IconButton from 'material-ui/IconButton';


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
                    <h4>{name} </h4>
                    <div style={ShoppingCartItemText}>
                    <IconButton><DeleteIcon color="black" onClick={() => {alert('DELETE FROM CART')}}/></IconButton>

                        <h5>{price}:-</h5>

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
    flexDirection: 'column',
    alignContent: 'center'
}