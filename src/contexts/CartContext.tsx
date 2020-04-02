import React, { createContext } from "react";

import { Product } from "../App";

interface CartItemData {
  product: Product;
  count: number;
}

interface UserInfo {
  name: string;
  email: string;
  tel: string;
  street: string;
  city: string;
  zip: string;
  shipping: string,
  shippingCost: number,
}

interface CartProps {}
interface CartState {
  items: CartItemData[];
  addToCart: (product: Product) => void;
  deleteFromCart: (product: Product) => void;
  totalPrice: () => number;
  totalCount: () => number;
  clearCart: () => void;

  //// USER
  userInfo: UserInfo;
  addShipping: (props: any) => void;
  addName: (event: React.ChangeEvent<HTMLInputElement>) => void
  addEmail: (event: React.ChangeEvent<HTMLInputElement>) => void
  addTel: (event: React.ChangeEvent<HTMLInputElement>) => void
  addStreet: (event: React.ChangeEvent<HTMLInputElement>) => void
  addCity: (event: React.ChangeEvent<HTMLInputElement>) => void
  addZip: (event: React.ChangeEvent<HTMLInputElement>) => void
  totalWithShipping: () => number;



}

const CartContext = createContext<CartState>({
  items: [],
  addToCart: (product: Product) => {},
  deleteFromCart: (product: Product) => {},
  totalPrice: () => 0,
  totalCount: () => 0,
  clearCart: () => {},

  ////USER
  userInfo: {
    name: '',
    email: '',
    tel: '',
    street: '',
    city: '',
    zip: '',
    shipping: '',
    shippingCost: 0,
  },
  
  addShipping : (props: any) => {},
  addName: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addEmail: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addTel: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addStreet: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addCity: (event: React.ChangeEvent<HTMLInputElement>) => {},
  addZip: (event: React.ChangeEvent<HTMLInputElement>) => {},
  totalWithShipping: () => 0,




});

export class CartProvider extends React.Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props);
    this.state = {
      items: [],
      addToCart: this.addToCart,
      deleteFromCart: this.deleteFromCart,
      totalPrice: this.totalPrice,
      totalCount: this.totalCount,
      clearCart: this.clearCart,

      //// USER
      userInfo: {
        name: '',
        email: '',
        tel: '',
        street: '',
        city: '',
        zip: '',
        shipping: '',
        shippingCost: 0,

      },

      addShipping: this.addShipping,
      addName: this.addName,
      addEmail: this.addEmail,
      addTel: this.addTel,
      addStreet: this.addStreet,
      addCity: this.addCity,
      addZip: this.addZip,
      totalWithShipping: this.totalWithShipping,


    };
  }

  clearCart = () => {
     const emtyArrar: any = [] 
    this.setState({ items: emtyArrar });
  };

  addToCart = (product: Product) => {
    const clonedItems: CartItemData[] = Object.assign([], this.state.items);

    for (const item of clonedItems) {
      if (product.id === item.product.id) {
        item.count += 1;
        this.setState({ items: clonedItems });
        return;
      }
    }
    
    clonedItems.push({ product, count: 1 });
    this.setState({ items: clonedItems });
  };
  
  deleteFromCart = (product: Product) => {
  const clonedItems: CartItemData[] = Object.assign([], this.state.items);
  
  for (const item of clonedItems) {
    if (product.id === item.product.id) {
      item.count -= 1;
        this.setState({ items: clonedItems });
        if (item.count < 1) {
          clonedItems.splice(clonedItems.indexOf(item), 1);
          this.setState({ items: clonedItems });
        }
        return;
      }
    }
  };

  totalPrice = (): number => {
    let total = 0;
    for (const item of this.state.items) {
      total += item.product.price * item.count;
    }  
    
    return total;
  };

  totalWithShipping = (): number => {
    const total = this.totalPrice()
    let done = 0
    if(this.state.userInfo.shipping === "Postnord") {
      done = total + 999999999
      console.log('HEHLDSK')
    } 

    return done
  };

  totalCount = (): number => {
    let total = 0;
    for (const item of this.state.items) {
      total += item.count;
    }
    return total;
  };



//////////////////// USER // DINA UPPGIFTER




addEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value)
  let email = event.target.value
  this.setState({ userInfo: { ...this.state.userInfo, email} });
  console.log('UserInfo > Email: ' + this.state.userInfo.email)


}


addName = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value)
  let name = event.target.value
  this.setState({ userInfo: { ...this.state.userInfo, name} });

  console.log('UserInfo > Name: ' + this.state.userInfo.name)

}

addTel = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value)
  let tel = event.target.value
  this.setState({ userInfo: { ...this.state.userInfo, tel} });

  console.log('UserInfo > Tel: ' + this.state.userInfo.tel)

}

addStreet = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value)
  let street = event.target.value
  this.setState({ userInfo: { ...this.state.userInfo, street} });

  console.log('UserInfo > Street: ' + this.state.userInfo.street)

}

addCity = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value)
  let city = event.target.value
  this.setState({ userInfo: { ...this.state.userInfo, city} });

  console.log('UserInfo > City: ' + this.state.userInfo.city)

}

addZip = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value)
  let zip = event.target.value
  this.setState({ userInfo: { ...this.state.userInfo, zip} });

  console.log('UserInfo > Zip: ' + this.state.userInfo.zip)

}



//////////////////// USER // SHIPPING

addShipping = (props: any) => {
  console.log('skethöl')
  let shipping = props
  this.setState({ userInfo: { ...this.state.userInfo, shipping} });

  console.log('UserInfo > Shipping: ' + this.state.userInfo.shipping)

  // let email = this.props
  // this.setState({ userInfo: { ...this.state.userInfo, email} });
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
