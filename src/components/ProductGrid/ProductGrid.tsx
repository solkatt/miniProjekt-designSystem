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

interface Props {
  products: Product[]
}

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

function handleAdd(props: any) {
    alert(props.ProductItem)
}

export default function GridListExampleSimple() {  
    const classes = useStyles();
    return ( 
        <Link to="/products">
          <div className={classes.rootClass}>
            <GridList
              cellHeight={'auto'}
              style={GridListStyle}>

            <Subheader>December</Subheader>
            
            {ProductData.map((ProductItem) => (

            <GridTile
              key={ProductItem.id}
              title={ProductItem.name}
              subtitle={<span>by <b>{ProductItem.description}</b></span>}
              actionIcon={<IconButton><AddShoppingCartIcon color="white" onClick={handleAdd} /></IconButton>}>
              <img alt='FUNKAR EJ' src={ProductItem.image} />
            </GridTile>

            ))}
            </GridList>
          </div>
        </Link>
    )};

const GridListStyle: CSSProperties = {
  width: '80vw',
  height: '80vh',
  overflowY: 'auto',
}