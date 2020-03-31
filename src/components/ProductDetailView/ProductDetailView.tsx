import React, { CSSProperties } from 'react'
import ProductData from "../Data/ProductData"
import { Product } from "../../App"
import { CartConsumer } from '../../contexts/CartContext';
import { IconButton } from 'material-ui';

import AddShoppingCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';



interface Props {
    match: any
}

interface State {
    products: Product[]
    id: number
}

class ProductDetailView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        const userId = this.props.match.params.id;
        const id = Number(userId.charAt(3));
        this.state = {
            products: ProductData,
            id: id
        }
        console.log('userId:', Number(userId.charAt(3)))
    }

    render() {
        return (

            <CartConsumer>
            {(cartState) => (



            <div className="ProductItem">

                <img alt="" style={ProductDetailViewImage} src={this.state.products[this.state.id].image} />
                <p className="productTitle">{this.state.products[this.state.id].name}</p>
                <p className="productDescription">{this.state.products[this.state.id].description}</p>
                <p className="productPrice">{this.state.products[this.state.id].price}:-</p>
                <IconButton><AddShoppingCartIcon color="black" onClick={() => cartState.addToCart(this.state.products[this.state.id])} /></IconButton>
         
            </div>

            
        )}
        </CartConsumer>
        )

    }

};


const ProductDetailViewImage: CSSProperties = {
    width: '60%',
    height: 'auto'
}




export default ProductDetailView;