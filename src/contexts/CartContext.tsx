import React, { createContext } from 'react';

import { Product } from '../App';

  
interface CartItemData {
    product: Product;
    count: number;
}

interface CartProps {}
interface CartState {
    items: CartItemData[];
    addToCart: (product: Product) => void;
    deleteFromCart: (product: Product) => void;
}

const CartContext = createContext<CartState>({
    items: [],
    addToCart: (product: Product) => {},
    deleteFromCart: (product: Product) => {}
});

export class CartProvider extends React.Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);
        this.state = {
            items: [],
            addToCart: this.addToCart,
            deleteFromCart: this.deleteFromCart
        };
    }

    addToCart = (product: Product) => {
        alert('Add to cart: ' + product.name)
        // update state: this.setState()
    };
    deleteFromCart = (product: Product) => {
        // update state
    };
    
    render() {
        return (
            <CartContext.Provider value={this.state}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export const CartConsumer = CartContext.Consumer;