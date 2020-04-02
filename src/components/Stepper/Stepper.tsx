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

  renderStepActions(step: any) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={stepIndex === 3 ? "Färdig" : "Nästa"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 && (
          <FlatButton
            label="Bakåt"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
    


    //  function validateForm() {
    //     var x = document.forms["myForm"]["fname"].value;
    //     if (x == "") {
    //       alert("Name must be filled out");
    //       return false;
    //     }
    //   }
  }

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

                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Dina uppgifter</StepLabel>
                <StepContent>
                  <CheckoutForm />
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Fraktsätt</StepLabel>
                <StepContent>
                  <p>Välj fraktsätt</p>
                  <DeliveryForm />
                  {this.renderStepActions(2)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Betalsätt</StepLabel>
                <StepContent>
                  <p>Välj betalsätt </p>
                  <CheckoutPay />
                  {this.renderStepActions(3)}
                <Checkbox required color="primary" />
                <p>Jag godkänner till alla mina lagbrott</p>
                </StepContent>
              </Step>
            </Stepper>
            {finished}
            {!finished ? "Lite kvar till ditt nya liv" : <OrderDone />}
            



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

 