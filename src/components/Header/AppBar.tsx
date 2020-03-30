import React, { CSSProperties } from 'react';
import AppBar from 'material-ui/AppBar';
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { Link } from 'react-router-dom';


function AppBarExampleIcon() {
  return (
    <Link to="/">
      <AppBar
        titleStyle={h1Style}
        title="Anderssons dammsugare"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        showMenuIconButton={false}>
        <ShoppingCart />
      </AppBar>
    </Link >
  )

}

export default AppBarExampleIcon;

const h1Style: CSSProperties = {
  listStyleType: 'none',
  textDecoration: 'none',
}

const AppBarStyle: CSSProperties = {

}