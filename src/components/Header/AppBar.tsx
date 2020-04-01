import React, { CSSProperties } from 'react';
import AppBar from 'material-ui/AppBar';
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { Link } from 'react-router-dom';
import { MediaConsumer } from '../../contexts/MediaQueryContext';


function AppBarExampleIcon() {
  return (
   <MediaConsumer>
     {(mediaState) => (
     <>
       <Link to="/" style={{
         textDecorationLine: "none",
        }}>
        <AppBar
          style={mediaState.size === 'desktop' ? AppBarStyle : AppBarStyleMobile}
          title="Lennarts dammsugeri fabrik"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}>
          <ShoppingCart />
        </AppBar>
    
    </Link >
  
  </>
  )}
  </MediaConsumer>
  )}

export default AppBarExampleIcon;

const AppBarStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // background: "d",
}

const AppBarStyleMobile: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // background: "blue",
}