import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from "./components/Header/AppBar"
import ProductGrid from './components/ProductGrid/ProductGrid'
import ProductDetailView from './components/ProductDetailView/ProductDetailView'
import ProductData from './components/Data/ProductData'

import { BrowserRouter } from "react-router-dom";

import { Switch, Route } from 'react-router-dom';

import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './contexts/CartContext';
import { MediaProvider } from './contexts/MediaQueryContext';
import { UserProvider } from './contexts/UserContext';

interface State {
  cartItems: CartItemData[];
  products: Product[];
}
export interface CartItemData {
  product: Product;
  count: number;
}



export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Props { }

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: ProductData,
      cartItems: [],
    }
  }


  render() {
    return (
      <BrowserRouter>
        <MediaProvider>
        <MuiThemeProvider >
          <UserProvider>
            <CartProvider>

              <AppBarExampleIcon />
              <Switch>

                <Route exact path="/" component={ProductGrid} />
                <Route path="/product/:id" component={ProductDetailView} />
                <Route path="/checkout" component={Checkout} />
              </Switch>
            </CartProvider>
          </UserProvider>
        </MuiThemeProvider>
        </MediaProvider>
      </BrowserRouter>
    )
  }
}
;



export default App