import React, { CSSProperties } from 'react'
import { CartConsumer } from '../../contexts/CartContext';



function OrderDone () {

    return (
        <CartConsumer>
            {(cartState) => (
                
                
                <div style={orderDoneStyle}>
                 
                 <div style={orderDetailsStyle}>
                    <h2> {cartState.userInfo.name} </h2>
                    <h4>{cartState.userInfo.email} </h4>

                    <h4>Beräknat leveransdatum: {cartState.userInfo.ETA} </h4>

                    <h1 style={prisStyle}>Pris inkl. Frakt: {cartState.totalWithShipping()}:- </h1>
                    <h3>Moms: {cartState.totalPrice() / 4}:-</h3>
                    <h1>Ordernummer:<br></br>{Math.floor(Math.random() * 100000) + 100000}</h1>

                </div>
             </div>
                )}
        </CartConsumer>
    )
 }

export default OrderDone;


const orderDoneStyle: CSSProperties = {
    background: '#c6f2ff',
    marginTop: '2rem'

}

const orderDetailsStyle: CSSProperties = {
    padding: '1rem',
}

const prisStyle: CSSProperties = {
    fontSize: '1.3rem',
}