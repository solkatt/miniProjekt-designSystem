import React, { CSSProperties } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';
import FontIcon from 'material-ui/FontIcon';



import ProductData from "../Data/ProductData";
import { Link } from 'react-router-dom';

import { CartConsumer } from '../../contexts/CartContext';
 
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
          <div style={CartStyle}>

            <RaisedButton
              label="Kundvagn"
              icon={<ShoppingCartIcon />}

              onClick={this.handleToggle}

            />
            <Drawer
              docked={false}
              width={300}
              open={this.state.open}
              openSecondary={true}
              onRequestChange={(open) => this.setState({ open })}
            >
              <Link to="/checkout" >
                <RaisedButton label="Gå vidare" buttonStyle={ButtonStyle} fullWidth={true} onClick={this.handleClose} />
              </Link>
              <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
            
              <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
              
              {cartState.items.length}

            </Drawer>

          </div>
        )}
      </CartConsumer>
    );
  }
}


const ButtonStyle: CSSProperties = {
  background: '#64DD17',
}

const CartStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}