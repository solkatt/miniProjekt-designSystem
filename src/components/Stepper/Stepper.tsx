import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ShoppingCartItem from '../ShoppingCart/ShoppingCartItem'
import { CartConsumer } from '../../contexts/CartContext';

import CheckoutForm from '../Checkout/CheckoutForm'
import DeliveryForm from '../Checkout/DeliveryForm';
class VerticalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
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
      <div style={{ margin: '12px 0' }}>
        <RaisedButton
          label={stepIndex === 3 ? 'Färdig' : 'Nästa'}
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
  }

  render() {
    const { finished, stepIndex } = this.state;

    return (
      <CartConsumer>
        {(cartState) => (
          <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
            <Stepper activeStep={stepIndex} orientation="vertical">
              <Step>
                <StepLabel>Kundvagn</StepLabel>
                <StepContent>
                  {console.log(cartState)}
                  {cartState.items.length ? <p>Din kundvagn består av</p> : <p>Din kundvagn är tom</p>}
                  
                  
                  {cartState.items.map((item) => (
                    <ShoppingCartItem product={item.product} count={item.count} />
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
                  <p>
                    Välj fraktsätt
              </p>
                  <DeliveryForm />
                  {this.renderStepActions(2)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Betalsätt</StepLabel>
                <StepContent>
                  <p>
                    Välj betalsätt
              </p>
                  {this.renderStepActions(3)}
                </StepContent>
              </Step>
            </Stepper>
            {finished && (
              <p style={{ margin: '20px 0', textAlign: 'center' }}>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({ stepIndex: 0, finished: false });
                  }}
                >
                  Click here
            </a> to reset the example.
              </p>
            )}
          </div>
        )}
      </CartConsumer>
    );
  }
}

export default VerticalLinearStepper;