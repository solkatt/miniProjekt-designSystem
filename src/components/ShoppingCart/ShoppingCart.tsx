import React, { CSSProperties } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';
import FontIcon from 'material-ui/FontIcon';
import ShoppingCartItem from './ShoppingCartItem'


import ProductData from "../Data/ProductData";
import { Link } from 'react-router-dom';

import { CartConsumer } from '../../contexts/CartContext';
import ShoppingCartBadge from './ShoppingCartBadge';
import { NONAME } from 'dns';

console.log(ProductData);

interface Props {

}

interface State {
  open: boolean
}

export default class ShoppingCart extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  
  render() {
    return (
      <CartConsumer>
        {(cartState) => (
          <div>
            <RaisedButton
              buttonStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={this.handleToggle}>
              <ShoppingCartBadge cartCount={cartState.items.length}/>
            </RaisedButton>

            <Drawer
              docked={false}
              width={300}
              open={this.state.open}
              openSecondary={true}
              onRequestChange={(open) => this.setState({ open })}>

              <Link to="/checkout" >
                <RaisedButton label="Till kassan" fullWidth={true} onClick={this.handleClose} />
              </Link>

              {cartState.items.map((item) => (
                <ShoppingCartItem  product={item.product} count={item.count} />
              ))}

              {/* {cartState.items.length} */}

              <h4 style={cartState.items.length ? kundvagn1 : kundvagn2}
              >Kundvagnen är tom</h4>

              {/* {cartState.items.map((item) => ( 
                item.
              ))} */}
              <h5>Total: {cartState.totalSum}:-</h5>             
            </Drawer>

          </div>
        )}
      </CartConsumer>
    );
  }
}

const kundvagn1: CSSProperties = {
  display: 'none',
}
const kundvagn2: CSSProperties = {
  display: 'block',


}