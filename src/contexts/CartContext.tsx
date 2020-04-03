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
  ETA: String,
}

interface CartProps { }
export interface CartState {
  items: CartItemData[];
  addToCart: (product: Product) => void;
  deleteFromCart: (product: Product) => void;
  totalPrice: () => number;
  totalCount: () => number;
  clearCart: () => void;

  //// USER
  userInfo: UserInfo;
  addShipping: (props: any) => void;
  calcETA: (props: any) => void
  addName: (name: string) => void
  addEmail: (email: string) => void
  addTel: (tel: string) => void
  addStreet: (street:string) => void
  addCity: (city:string) => void
  addZip: (zip: string) => void
  totalWithShipping: () => number;
  thisDate: () => void;
  doneFunc: () => void;
  nameErrorMessage: string,

  cityErrorMessage: string,
  streetErrorMessage: string,

  telErrorMessage: string
  theDate: any
  done: boolean

}

const CartContext = createContext<CartState>({
  items: [],
  addToCart: (product: Product) => { },
  deleteFromCart: (product: Product) => { },
  totalPrice: () => 0,
  totalCount: () => 0,
  clearCart: () => { },

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
    ETA: '',
  },

  cityErrorMessage: "",
  streetErrorMessage: "",
  nameErrorMessage: "",

  telErrorMessage: "",
  theDate: "",
  done: false,

  addShipping: (props: any) => { },
  calcETA: (props: any) => { },

  addName: (name: string) => { },
  addEmail: (email: string) => { },
  addTel: (tel: string) => { },
  addStreet: (street: string) => { },
  addCity: (city: string) => { },
  addZip: (zip: string) => { },
  totalWithShipping: () => 0,
  thisDate: () => { },
  doneFunc: () => { },





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
        ETA: '',

      },
      nameErrorMessage: "",
      cityErrorMessage: "",
      streetErrorMessage: "",
      telErrorMessage: "",
      theDate: "",
      done: false,

      addShipping: this.addShipping,
      calcETA: this.calcETA,

      addName: this.addName,
      addEmail: this.addEmail,
      addTel: this.addTel,
      addStreet: this.addStreet,
      addCity: this.addCity,
      addZip: this.addZip,
      totalWithShipping: this.totalWithShipping,
      thisDate: this.thisDate,
      doneFunc: this.doneFunc,
    };
  }


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

    console.log('totalWithShipping Fired'
      + 'shipping: ' + this.state.userInfo.shipping)

    const total = this.totalPrice()
    let done = 0
    if (this.state.userInfo.shipping === "Postnord") {
      done = total + 99
    } else if (this.state.userInfo.shipping === 'DHL') {
      done = total + 79
    } else {
      done = total + 39

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




  addEmail = (email: string) =>{ this.setState({ userInfo: { ...this.state.userInfo, email } });}



  addName = (name: string) => {this.setState({ userInfo: { ...this.state.userInfo, name } });}

  addZip = (zip: string) => {this.setState({ userInfo: { ...this.state.userInfo, zip } });}

  
  addTel = (tel: string) =>{ this.setState({ userInfo: { ...this.state.userInfo, tel } });}

  addStreet = (street: string) => {this.setState({ userInfo: { ...this.state.userInfo, street } });}

  addCity = (city: string) =>{ this.setState({ userInfo: { ...this.state.userInfo, city } });}




  //////////////////// USER // SHIPPING

  addShipping = (props: any) => {
    let shipping = props
    this.setState({ userInfo: { ...this.state.userInfo, shipping } });


    // let email = this.props
    // this.setState({ userInfo: { ...this.state.userInfo, email} });
    this.thisDate()

  }

  calcETA = (props: any) => {





  let datum = new Date()

  let ETA = ''
     

    if( props == 'Postnord') {
    datum.setDate(datum.getDate() + 50).toString();
    ETA = datum.toString();

      } else if (props == 'DHL') {
        datum.setDate(datum.getDate() + 1).toString();
        ETA = datum.toString();
      } else {
        datum.setDate(datum.getDate() + 3).toString();
        ETA = datum.toString();
     }

   this.setState({ userInfo: { ...this.state.userInfo, ETA } });
   console.log('UserInfo > ETA: ' + this.state.userInfo.ETA)
  }



  clearCart = () => {
    if (this.state.done) {
      this.setState({ items: [] });
    }
  };



  thisDate = () => {
    const date = new Date();
    this.setState({ theDate: date })

  }

  doneFunc = () => {
    this.setState({done: true})
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
