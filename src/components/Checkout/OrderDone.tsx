import React from 'react'
import { CartConsumer } from '../../contexts/CartContext';



function OrderDone () {
    return (
        <CartConsumer>
            {(cartState) => (
                
                
                <div>
                 
                 <h2> {cartState.userInfo.name} </h2>
                    <h4>{cartState.userInfo.email} </h4>
                    <h4>{cartState.userInfo.street} </h4>
                    <h4>{cartState.userInfo.zip} </h4>
                    <h4>{cartState.userInfo.city} </h4>

                    <h4>{cartState.userInfo.shipping} </h4>

                  <h1>{cartState.totalWithShipping} kronor </h1>

        </div>
                )}
        </CartConsumer>
    )
 }

export default OrderDone;