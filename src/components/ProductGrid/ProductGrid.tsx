import React, { CSSProperties} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import AddShoppingCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';
import {createStyles, makeStyles, Theme,} from '@material-ui/core/styles/'

import ProductData from "../Data/ProductData"

import dammsugare from "../../img/dammsugare.jpg"

import { Product } from "../../App"
import ProductItem from "../ProductItem/ProductItem"
import { Link } from 'react-router-dom';
import { CartConsumer } from '../../contexts/CartContext';


interface Props {}

const useStyles = makeStyles((theme: Theme ) =>
 createStyles({
  rootClass: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
}),
);

// interfacet RouteComponentProps

export default function ProductGrid(props: Props) {  
    const classes = useStyles();


    return (
      <CartConsumer>
        {(cartState) => (
          <div className={classes.rootClass}>
            <GridList
              cellHeight={'auto'}
              style={GridListStyle}>

            <Subheader>Produkter</Subheader>
            
            {ProductData.map((product) => (
              <Link to={"/product/" + product.id}>
                <GridTile
                  key={product.id}
                  title={product.name}
                  subtitle={<span><b>{product.price}:-</b></span>}
                  actionIcon={<IconButton><AddShoppingCartIcon color="white" onClick={() => cartState.addToCart(product)} /></IconButton>}>
                  <img alt='FUNKAR EJ' src={product.image} />
                </GridTile>
              </Link>

            ))}
            </GridList>
          </div>
        )}
      </CartConsumer>
    )};

const GridListStyle: CSSProperties = {
  width: '80vw',
  height: '80vh',
  overflowY: 'auto',
}