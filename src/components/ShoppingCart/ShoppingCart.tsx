import React, { CSSProperties } from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

import ShoppingCartItem from './ShoppingCartItem'


import { Link } from 'react-router-dom';

import { CartConsumer } from '../../contexts/CartContext';
import ShoppingCartBadge from './ShoppingCartBadge';

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
              buttonStyle={shoppingCartButton}
              onClick={this.handleToggle}>
              <ShoppingCartBadge cartCount={cartState.totalCount()} />
            </RaisedButton>

            <Drawer
              docked={false}
              width={300}
              open={this.state.open}
              openSecondary={true}
              onRequestChange={(open) => this.setState({ open })}>

              <Link to={cartState.totalCount() > 0 ? '/checkout' : '/' }>
              {/* <Link to="/checkout" > */}
                <RaisedButton label="Till kassan" fullWidth={true} 
                onClick={this.handleClose}
                backgroundColor={cartState.totalCount() > 0 ? '#6ee68e' : '#EDEDED' }/>
              </Link>

              {cartState.items.map((item) => (
                <ShoppingCartItem product={item.product} count={item.count} />
              ))}

              {/* {cartState.items.length} */}

              <h4 style={cartState.items.length ? kundvagn1 : kundvagn2}
              >&nbsp;Kundvagnen är tom</h4>


              {/* {cartState.items.map((item) => ( 
                item.
              ))} */}
              <h5>&nbsp;Total: {cartState.totalPrice()}:-</h5>
            </Drawer>

          </div>
        )}
      </CartConsumer>
    );
  }
}


const shoppingCartButton: CSSProperties = {
  background: '#6ee68e',

}




const kundvagn1: CSSProperties = {
  display: 'none',
}
const kundvagn2: CSSProperties = {
  display: 'block',


}