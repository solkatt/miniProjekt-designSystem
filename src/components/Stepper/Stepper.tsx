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

class VerticalLinearStepper extends React.Component {
  state = {
    finished: false,
    stepIndex: 0,
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

  

  render() {
    const { finished, stepIndex } = this.state;

    return (
      <CartConsumer>
        {cartState => (
          <div style={ StepperContainerStyle }>
            <Stepper
              style={StepperStyle}
              activeStep={stepIndex}
              orientation="vertical"
            >
              <Step>
                <StepLabel>Kundvagn</StepLabel>
                <StepContent>
                  {cartState.items.length ? (
                    <p>Din kundvagn består av</p>
                  ) : (
                    <p>Din kundvagn är tom</p>
                  )}

                  {cartState.items.map(item => (
                    <ShoppingCartItem
                      product={item.product}
                      count={item.count}
                    />
                  ))}

                  <h3> Total : {cartState.totalPrice()} :-</h3>
                  <ActionButtons stepIndex={stepIndex} onNext={this.handleNext} onPrevious={this.handlePrev}/>
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Dina uppgifter</StepLabel>
                <StepContent>
                  <CheckoutForm cartState={cartState} stepIndex={stepIndex} onNext={this.handleNext} onPrevious={this.handlePrev}/>
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
                  <CheckoutPay />
                <Checkbox required color="primary" />
                <p>Jag godkänner allt</p>
                </StepContent>
              </Step>
            </Stepper>
            {finished}
            {!finished ? "Lite kvar till ditt nya dammfria liv" : <OrderDone />}
            



             <div style={this.state.finished ? showStyle : hideStyle}>
               



                    
                    
                    </div> 




          </div>
        )}
      </CartConsumer>
    );
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

 