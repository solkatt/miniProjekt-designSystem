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
    totalPrice: (items: CartItemData[]) => void;
    totalSum: number
}

const CartContext = createContext<CartState>({
    items: [],
    addToCart: (product: Product) => { },
    deleteFromCart: (product: Product) => { },
    totalPrice: (items: CartItemData[]) => { },
    totalSum: 0
});


export class CartProvider extends React.Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);
        this.state = {
            items: [],
            addToCart: this.addToCart,
            deleteFromCart: this.deleteFromCart,
            totalPrice: this.totalPrice,
            totalSum: 0
        };
    }

    addToCart = (product: Product) => {
        // alert('Add to cart: ' + product.name)
        // update state: this.setState()
        if(this.state.items.length === 0) {
            const updatedItems = [...this.state.items, { product, count: 1 }];
            this.setState({ items: updatedItems })
        } else {

            for (let i = 0; i < this.state.items.length; i++) {
                if(product.id === this.state.items[i].product.id) {

                    this.state.items[i].count += 1
                    console.log("plus på count")
                    
                } else {
                    
                     const updatedItems = [...this.state.items, { product, count: 1 }];
                     this.setState({ items: updatedItems })
                    console.log('lägg till first prod')
                }
                console.log("index", i)
            }
        }
            

        this.totalPrice(this.state.items);
        console.log("this.state.items ",this.state.items)
        console.log("product", product)
        this.deleteFromCart(product)
    };

    deleteFromCart = (product: Product) => {
        for (let i = 0; i < this.state.items.length; i++) {
            if(product.id == this.state.items[i].product.id) {
                // console.log(this.state.items[i].count)
                // console.log("samma?")
            }
        }
    };


    totalPrice = (items:CartItemData[]) => {
        let total = 0;

        for (let i = 0; i < items.length;) {
            total += items[i].product.price * items[i].count
            i++
        }
        this.setState({
            totalSum: total
        })
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