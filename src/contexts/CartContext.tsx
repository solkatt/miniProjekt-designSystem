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
  ETA: string,
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
  addName: (event: React.ChangeEvent<HTMLInputElement>) => void
  addEmail: (email: string) => void
  addTel: (event: React.ChangeEvent<HTMLInputElement>) => void
  addStreet: (event: React.ChangeEvent<HTMLInputElement>) => void
  addCity: (event: React.ChangeEvent<HTMLInputElement>) => void
  addZip: (event: React.ChangeEvent<HTMLInputElement>) => void
  totalWithShipping: () => number;
  thisDate: () => void;
  doneFunc: () => void;
  emailErrorMessage: string,

  nameErrorMessage: string,
  cityErrorMessage: string,
  streetErrorMessage: string,

  zipErrorMessage: string
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
  emailErrorMessage: "",
  nameErrorMessage: "",
  cityErrorMessage: "",
  streetErrorMessage: "",
  zipErrorMessage: "",
  telErrorMessage: "",
  theDate: "",
  done: false,

  addShipping: (props: any) => { },
  calcETA: (props: any) => { },

  addName: (event: React.ChangeEvent<HTMLInputElement>) => { },
  addEmail: (email: string) => { },
  addTel: (event: React.ChangeEvent<HTMLInputElement>) => { },
  addStreet: (event: React.ChangeEvent<HTMLInputElement>) => { },
  addCity: (event: React.ChangeEvent<HTMLInputElement>) => { },
  addZip: (event: React.ChangeEvent<HTMLInputElement>) => { },
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
      emailErrorMessage: "",
      nameErrorMessage: "",
      cityErrorMessage: "",
      streetErrorMessage: "",
      zipErrorMessage: "",
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




  addEmail = (email: string) => this.setState({ userInfo: { ...this.state.userInfo, email } });



  addName = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    let name = event.target.value
    this.setState({ userInfo: { ...this.state.userInfo, name } });
    console.log('UserInfo > Name: ' + this.state.userInfo.name)
    if (!name.match('[A-ö]')) {
      this.setState({ nameErrorMessage: 'Måste innehålla bokstäver' })
    } else {
      this.setState({ nameErrorMessage: '' })
    }

  }

  addZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    let zip = event.target.value
    this.setState({ userInfo: { ...this.state.userInfo, zip } });
    console.log('UserInfo > Zip: ' + this.state.userInfo.zip)
    if (zip.match('[^0-9]')) {
      this.setState({ zipErrorMessage: 'Måste innehålla siffror' })
    } else {
      this.setState({ zipErrorMessage: '' })
    }

  }
  addTel = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    let tel = event.target.value
    this.setState({ userInfo: { ...this.state.userInfo, tel } });
    console.log('UserInfo > Tel: ' + this.state.userInfo.tel)
    if (tel.match('[^0-9]')) {
      this.setState({ telErrorMessage: 'Måste innehålla siffror' })
    } else {
      this.setState({ telErrorMessage: '' })
    }

  }

  addStreet = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    let street = event.target.value
    this.setState({ userInfo: { ...this.state.userInfo, street } });
    console.log('UserInfo > Street: ' + this.state.userInfo.street)
    if (!street.match('[A-ö]') && !street.match('[^0-9]')) {
      this.setState({ streetErrorMessage: 'Måste innehålla bokstäver och siffror' })
    } else {
      this.setState({ streetErrorMessage: '' })
    }

  }

  addCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    let city = event.target.value
    this.setState({ userInfo: { ...this.state.userInfo, city } });
    console.log('UserInfo > City: ' + this.state.userInfo.city)
    if (!city.match('[A-ö]')) {
      this.setState({ cityErrorMessage: 'Måste innehålla bokstäver' })
    } else {
      this.setState({ cityErrorMessage: '' })
    }


  }




  //////////////////// USER // SHIPPING

  addShipping = (props: any) => {
    let shipping = props
    this.setState({ userInfo: { ...this.state.userInfo, shipping } });

    console.log('UserInfo > Shipping: ' + this.state.userInfo.shipping)

    // let email = this.props
    // this.setState({ userInfo: { ...this.state.userInfo, email} });
    this.thisDate()

  }

  calcETA = (props: any) => {

    console.log('CALCEEETA BDADSADDS')

    let ETA = ''

    const date = new Date();


     if (this.state.userInfo.shipping == 'Postnord') {
      date.setHours(date.getHours() + 188);
      ETA = date.toDateString()
     }



    this.setState({ userInfo: { ...this.state.userInfo, ETA } });
    console.log('UserInfo > ETA: ' + this.state.userInfo.shipping)


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
