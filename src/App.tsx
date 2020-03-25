import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';

import AppBarExampleIcon from "./components/Header/AppBar"
import GridListExampleSimple from './components/ProductGrid/ProductGrid'
 
const App = () => (
  <MuiThemeProvider>
    <AppBarExampleIcon />
    <MyAwesomeReactComponent />
    < GridListExampleSimple />
  </MuiThemeProvider>
);
 


export default App