import React from "react"
import ProductData from "../Data/ProductData"
import { Product } from "../../App"
import { Link } from 'react-router-dom'

interface Props {
    product: Product
    
}

function ProductItem(props: Props) {

    const { id, name, description, price, image } = props.product
    return (
        <Link to="/" >
        <div key={id} className="ProductItem">
            <img alt="" src={image}/>
            <p className="productTitle">{name}</p>
            <p className="productDescription">{description}</p>
            <p className="productPrice">{price}:-</p>
            {console.log("????",props.product.name)}
        </div>
        </Link>
    )
}

export default ProductItem
