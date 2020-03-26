import React from "react"
import ProductData from "../Data/ProductData"
import { Product } from "../../App"

interface Props {
    product: Product
    
}

function ProductItem(props: Props) {

    const { name, description, price, image } = props.product
    return (
        <div className="ProductItem">
            <img alt="" src={image}/>
            <p className="productTitle">{name}</p>
            <p className="productDescription">{description}</p>
            <p className="productPrice">{price}:-</p>
        </div>
    )
}

export default ProductItem
