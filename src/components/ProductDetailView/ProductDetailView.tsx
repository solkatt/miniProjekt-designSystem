import React, { CSSProperties } from 'react'
import ProductData from "../Data/ProductData"
import { Product } from "../../App"


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
            <div className="ProductItem">

                <img alt="" style={ProductDetailViewImage} src={this.state.products[this.state.id].image} />
                <p className="productTitle">{this.state.products[this.state.id].name}</p>
                <p className="productDescription">{this.state.products[this.state.id].description}</p>
                <p className="productPrice">{this.state.products[this.state.id].price}:-</p>
            </div>
        )
    }

};


const ProductDetailViewImage: CSSProperties = {
    width: '60%',
    height: 'auto'
}




export default ProductDetailView;