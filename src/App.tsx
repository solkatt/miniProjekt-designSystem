import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBarExampleIcon from "./components/Header/AppBar"
import GridListExampleSimple from './components/ProductGrid/ProductGrid'
import Main from './components/Main/Main';


import { BrowserRouter } from "react-router-dom";

import { Switch, Route } from 'react-router-dom';

import Checkout from './components/Checkout/Checkout';


interface State {
  cartItems: CartItemData[];
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

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <AppBarExampleIcon />
      <Switch>
        <Route exact path="/">
          < Main />
        </Route>
        <Route path="/products">
          < GridListExampleSimple />
        </Route>
        <Route path="/checkout">
          < Checkout />
        </Route>
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>
);



export default App