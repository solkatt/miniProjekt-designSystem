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
    title="Lennart ''Storsugarn'' Anderssons sugkalas"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    showMenuIconButton={false}>

    {/* <ShoppingCart style={CartStyle} /> */}
    <ShoppingCart />
  </AppBar>
    </Link>
)

}

export default AppBarExampleIcon;

