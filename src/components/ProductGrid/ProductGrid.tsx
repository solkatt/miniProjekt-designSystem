import React, { CSSProperties } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import AddShoppingCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';
import { createStyles, makeStyles, Theme, } from '@material-ui/core/styles/'

import ProductData from "../Data/ProductData"

import { Link } from 'react-router-dom';
import { CartConsumer } from '../../contexts/CartContext';

import "./ProductGrid.css"
import { render } from '@testing-library/react';



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
  size: 'mobile' | 'tablet' | 'desktop'
}
// interfacet RouteComponentProps

class ProductGrid extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      size: 'desktop'
    }
  }


handleWindowsResize = () => {
  if (window.innerWidth < 579) {
    this.setState({ size: 'mobile' })
  } else if (window.innerWidth < 879) {
    this.setState({ size: 'tablet' })
  } else {
    this.setState({ size: 'desktop' })
  }
}

componentDidMount() {
  window.addEventListener('resize', this.handleWindowsResize)
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowsResize)
}

test = () => {
  if(this.state.size === 'mobile') {
    return 1
  } else {
    return 2
  }
}

render() {
  return (
    <CartConsumer>
      {(cartState) => (
        <div >
          <GridList
            cellHeight={'auto'}
            // style={GridListStyle}
            cols={this.test()}

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
  )
}}
;
export default ProductGrid

const GridListStyle: CSSProperties = {
  width: '90vw',
  height: 'auto',
  overflowY: 'auto',
  display: "flex",
  flexWrap: "wrap",
}

const GridTileStyle: CSSProperties = {
  width: "100%",
  height: "auto",
}


