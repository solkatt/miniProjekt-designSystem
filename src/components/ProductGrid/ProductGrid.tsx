import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import AddShoppingCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';
import { createStyles, makeStyles, Theme, } from '@material-ui/core/styles/'

import ProductData from "../Data/ProductData"

import { Link } from 'react-router-dom';
import { CartConsumer } from '../../contexts/CartContext';

import "./ProductGrid.css"
import { MediaConsumer } from '../../contexts/MediaQueryContext';



interface Props {

}

const useStyles = makeStyles((theme: Theme) =>
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
interface State {

}
// interfacet RouteComponentProps

class ProductGrid extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }



  render() {
    return (
      <MediaConsumer>
        {(mediaState) => (
          
          <CartConsumer>

          {(cartState) => (
            <div >
            <GridList
              cellHeight={'auto'}
              // style={GridListStyle}
              cols={mediaState.colNum()}
              
              >
              <Subheader>Produkter</Subheader>


              {ProductData.map((product) => (
                
                <GridTile
                
                key={product.id}
                
                title={product.name}
                subtitle={<span><b>{product.price}:-</b></span>}
                actionIcon={<IconButton><AddShoppingCartIcon className='shoppingCartIcon' color="white" onClick={() => cartState.addToCart(product)} /></IconButton>}>
                  <Link to={"/product/" + product.id}>
                    <img className="productImage" alt='' src={product.image} />
                  </Link>
                </GridTile>

))}
            </GridList>
          </div>
        )}
      </CartConsumer>
      )}
        </MediaConsumer>
    )
  }
}
;
export default ProductGrid

