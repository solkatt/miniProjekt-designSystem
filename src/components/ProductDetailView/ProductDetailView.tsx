import React, { CSSProperties } from 'react'
import ProductData from "../Data/ProductData"
import { Product } from "../../App"
import { CartConsumer } from '../../contexts/CartContext';
import { IconButton } from 'material-ui';

import AddShoppingCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';
import { Link } from 'react-router-dom';

import "./ProductDetailView"

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
        const id = Number(userId);
        this.state = {
            products: ProductData,
            id: id
        }
    }

    render() {
        return (

            <CartConsumer>
                {(cartState) => (
                    <div style={ProductDetailViewDiv}>
                        <img alt="" style={ProductDetailViewImage} src={this.state.products[this.state.id].image} />
                            <div style={{paddingTop: "6rem"}}>
                                <p className="productTitle"><b>{this.state.products[this.state.id].name}</b><IconButton><AddShoppingCartIcon color="black" onClick={() => cartState.addToCart(this.state.products[this.state.id])} /></IconButton></p>
                                <p className="productDescription">{this.state.products[this.state.id].description}</p>
                                <p className="productPrice">{this.state.products[this.state.id].price}:-</p>
                                
                            </div>
                        
                    </div>


                )}
            </CartConsumer>
        )

    }

};

const ProductDetailViewDiv: CSSProperties = {
    columns: "3"
}

const ProductDetailTitle: CSSProperties = {
    display: "flex",
    alignItems: "center",
}

const ProductDetailViewImage: CSSProperties = {
    width: '700px',
    height: '700px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: "1rem",
}

export default ProductDetailView;