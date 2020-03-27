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
        const updatedItems = [...this.state.items, { product, count: 1 }];
        this.setState({ items: updatedItems })
        console.log(this.state.items)
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