import React, { CSSProperties } from 'react';
import AppBar from 'material-ui/AppBar';
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { Link } from 'react-router-dom';


function AppBarExampleIcon() {
  return (
    <Link to="/" style={{
      textDecorationLine: "none",
    }}>
      <>
        <AppBar
          style={AppBarStyle}
          title="Anderssons dammsugare"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}>
          <ShoppingCart />
        </AppBar>

      </>
    </Link >
  )

}

export default AppBarExampleIcon;

const AppBarStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "darkred",
}