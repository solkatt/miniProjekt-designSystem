import React, { CSSProperties} from 'react';
import AppBar from 'material-ui/AppBar';
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { Link } from 'react-router-dom';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
function AppBarExampleIcon() {
return (
  <Link to="/">
    <AppBar
    title="Anderssons dammsugare"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    showMenuIconButton={false}>
    <ShoppingCart />
  </AppBar>
    </Link>
)

}

export default AppBarExampleIcon;

const h1Style: CSSProperties = {
  margin: '1rem',
}

const AppBarStyle: CSSProperties = {

}