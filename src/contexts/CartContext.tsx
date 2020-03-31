import React, { createContext } from 'react';

import { Product } from '../App';


interface CartItemData {
    product: Product;
    count: number;
}

interface CartProps { }
interface CartState {
    items: CartItemData[];
    addToCart: (product: Product) => void;
    deleteFromCart: (product: Product) => void;
    totalPrice: () => number;
    totalCount: () => number;
}

const CartContext = createContext<CartState>({
    items: [],
    addToCart: (product: Product) => { },
    deleteFromCart: (product: Product) => { },
    totalPrice: () => 0,
    totalCount: () => 0,
});


export class CartProvider extends React.Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);
        this.state = {
            items: [],
            addToCart: this.addToCart,
            deleteFromCart: this.deleteFromCart,
            totalPrice: this.totalPrice,
            totalCount: this.totalCount
        };
    }

    addToCart = (product: Product) => {
        const clonedItems: CartItemData[] = Object.assign([], this.state.items);
        
        for (const item of clonedItems) {
            if (product.id === item.product.id) {       
                item.count += 1;
                this.setState({ items: clonedItems })
                return
            }
        }

        clonedItems.push({ product, count: 1 });
        this.setState({ items: clonedItems })
    };

    deleteFromCart = (product: Product) => {

    const clonedItems: CartItemData[] = Object.assign([], this.state.items);

        for (const item of clonedItems) {
            if(product.id === item.product.id) {

                item.count -= 1
                this.setState({ items: clonedItems })
                if(item.count < 1) {
                    
                    clonedItems.splice(clonedItems.indexOf(item), 1)
                    this.setState({ items: clonedItems })
                }
                return
            }
        }
  
    };


    totalPrice = (): number => {
        let total = 0;
        for (const item of this.state.items) {
            total += item.product.price * item.count
        }
        return total
    }

    totalCount = (): number => {
        let total = 0;
        for (const item of this.state.items) {
             total += item.count
        }
        return total
    }

    render() {
        return (
            <CartContext.Provider value={this.state}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export const CartConsumer = CartContext.Consumer;