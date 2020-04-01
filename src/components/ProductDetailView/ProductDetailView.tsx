import React, { CSSProperties } from "react";
import ProductData from "../Data/ProductData";
import { Product } from "../../App";
import { CartConsumer } from "../../contexts/CartContext";
import { IconButton } from "material-ui";

import AddShoppingCartIcon from "material-ui/svg-icons/action/add-shopping-cart";
import { Link } from "react-router-dom";

import "./ProductDetailView";
import { MediaConsumer } from "../../contexts/MediaQueryContext";

interface Props {
  match: any;
}

interface State {
  products: Product[];
  id: number;
}

class ProductDetailView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const userId = this.props.match.params.id;
    const id = Number(userId);
    this.state = {
      products: ProductData,
      id: id
    };
  }

  render() {
    return (
      <>
        <MediaConsumer>
          {mediaState => (
            <CartConsumer>
              {cartState => (
                <div style={ProductDetailViewDiv}>
                  <img style={mediaState.size === 'desktop' ? {
                            boxShadow: "7px 7px 10px black",
                            padding: "1rem",
                            width: "30%",
                            height: "30%",
                            display: "flex",
                            alignItems: "center",
                            margin: "1rem"                       
                        } : 
                        {
                            boxShadow: "7px 7px 10px black",
                            border: "3px solid black",
                            padding: "1rem",
                            width: "80%",
                            height: "80%",
                            display: "flex",
                            alignItems: "center",
                            margin: "1rem" 
                          }}
                    alt=""
                    src={this.state.products[this.state.id].image}
                  />

                  <div style={mediaState.size === 'desktop' ? {
                        marginTop: "1rem",
                          padding: "1rem",
                          textAlign: "left",
                          width: "40%",
                          height: "auto",
                          background: '#c6f2ff',
                          borderRadius: '10px',
                        } :
                        {
                            padding: "1rem",
                            textAlign: "left",
                            width: "100%",
                            height: "auto",
                            background: '#c6f2ff'
                          }}
                  >
                    <p className="productTitle">
                      <b>{this.state.products[this.state.id].name}</b>
                  
                    </p>
                    <p className="productDescription">
                      {this.state.products[this.state.id].description}
                    </p>
                    <p style={{fontSize: '2rem',}}className="productPrice">
                      <b>{this.state.products[this.state.id].price}:-</b>
                    </p>
                    <IconButton>
                        <AddShoppingCartIcon
                          color="black"
                          onClick={() =>
                            cartState.addToCart(
                              this.state.products[this.state.id]
                            )
                          }
                        />
                      </IconButton>
                  </div>
              
                </div>
              )}
            </CartConsumer>
          )}
        </MediaConsumer>
      </>
    );
  }
}

const ProductDetailViewDiv: CSSProperties = {
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap"
};

export default ProductDetailView;
