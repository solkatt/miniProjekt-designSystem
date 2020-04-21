import React, { CSSProperties } from "react";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { CartConsumer } from "../../contexts/CartContext";

import CheckoutForm from "../Checkout/CheckoutForm";
import CheckoutPay from "../Checkout/CheckoutPay";

import DeliveryForm from "../Checkout/DeliveryForm";
import Checkbox from '@material-ui/core/Checkbox';
import ShoppingCartItem from "../ShoppingCart/ShoppingCartItem";
import OrderDone from "../Checkout/OrderDone";
import ActionButtons from "./actionButtons";
import Loader from "../Checkout/Loader";
import orderAPI  from '../../api'

class VerticalLinearStepper extends React.Component {
  state = {
    finished: false,
    stepIndex: 0,
    allDone: false,
    waiting: true,
    test: []
  };


  
  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3
    });
  };


  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  handleCheckout = () => {
    
  }

    OrderAwaitDone = async () => {
      console.log('calling');
      const respone = await orderAPI();
      console.log(respone)
      if (respone === "resolved") {
        this.setState({waiting: false, allDone: true,})
      }
    };


  render() {
    const { finished, stepIndex, allDone, waiting} = this.state;
     if (finished && allDone) {
      return <OrderDone />
    } else if(finished && waiting && !allDone) {
      this.OrderAwaitDone()
      return <Loader />
    }else {

      return (
        <CartConsumer>
        {cartState => (
          <div style={StepperContainerStyle}>
            <Stepper
              style={StepperStyle}
              activeStep={stepIndex}
              orientation="vertical">

              <Step>
                <StepLabel>Kundvagn</StepLabel>
                <StepContent>
                  {cartState.items.length ? (
                    <p>Din kundvagn består av</p>) : (<p>Din kundvagn är tom</p>)}

                  {cartState.items.map(item => (
                    <ShoppingCartItem product={item.product} count={item.count}/>))}

                  <h3>Total: {cartState.totalPrice()}:-</h3>

                  <ActionButtons stepIndex={stepIndex} 
                  onNext={() => {
                    if(cartState.items.length < 1) {
                      
                    } else {
                      this.handleNext()
                    }
                  }}
                  
                  onPrevious={this.handlePrev} />
                </StepContent>        
              </Step>

              <Step>
                <StepLabel>Dina uppgifter</StepLabel>
                <StepContent>
                  <CheckoutForm cartState={cartState} stepIndex={stepIndex} onNext={this.handleNext} onPrevious={this.handlePrev} />
                </StepContent>
              </Step>

              <Step>
                <StepLabel>Fraktsätt</StepLabel>
                <StepContent>
                  <p>Välj fraktsätt</p>
                  <DeliveryForm cartState={cartState} stepIndex={stepIndex} onNext={this.handleNext} onPrevious={this.handlePrev} />
                </StepContent>
              </Step>

              <Step>
                <StepLabel>Betalsätt</StepLabel>
                <StepContent>
                  <p>Välj betalsätt </p>
                  <CheckoutPay cartState={cartState} stepIndex={stepIndex} onNext={this.handleNext} onPrevious={this.handlePrev} />
                </StepContent>
              </Step>

            </Stepper>
            {finished}
            <div style={this.state.finished ? showStyle : hideStyle}>
            </div>
          </div>
        )}
      </CartConsumer>
    );
  }
  
  }
  
}

export default VerticalLinearStepper;

const StepperContainerStyle: CSSProperties = {
  maxWidth: 380,
  maxHeight: 400,
  margin: "auto"
};
const StepperStyle: CSSProperties = {
  // width: '100vw',
  // background: 'blue',
};

const showStyle: CSSProperties = {
  display: 'block'
}

const hideStyle: CSSProperties = {
  display: 'none'
}
