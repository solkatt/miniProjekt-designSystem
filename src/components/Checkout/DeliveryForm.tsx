import React, { CSSProperties } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { CartConsumer, CartState } from "../../contexts/CartContext";

import ActionButtons, { Props as ActionButtonProps } from "../Stepper/actionButtons";

interface State { 
    emailErrorMessage: string,
    value: any,
    handleChange: () => void,

}
interface Props extends ActionButtonProps {
    cartState: CartState
}
export default class DeliveryForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            
            emailErrorMessage: "",
            value: "",
            handleChange: () => {},

        }
        // const [value, setValue] = React.useState('Postnord');
    }

    handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        const radioButton = event.target.value;
        console.log(radioButton)
        this.setState({value: radioButton})
    }
  
    onNextStep = () => {
        const { value } = this.state;
    
        if (!value) {
          this.props.onNext()
        }
    }

    render() {  

    const { cartState, stepIndex, onNext, onPrevious } = this.props;

    return (
    <CartConsumer>
        {(cartState) => (
            <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup 
                    aria-label="gender" 
                    name="gender"
                    onChange={this.handleChange}>
                    <FormControlLabel style={priceStyle} value="postnord" control={<Radio />} label="Postnord 99kr Leveranstid: 5 dagar"
                        onChange={() => {
                            cartState.addShipping('Postnord')
                            cartState.calcETA('Postnord') 
                        }} />

                    <FormControlLabel value="dhl" control={<Radio />} label="DHL 79kr Leveranstid: 1 - 2 dagar"
                        onChange={() => {
                            cartState.addShipping('DHL')
                            cartState.calcETA('DHL') 
                        }}
                    />

                    <FormControlLabel value="dbschenker" control={<Radio />} label="DB Schenker 39kr Leveranstid: 3 - 4 dagar"
                        onChange={() => {
                            cartState.addShipping('DB Schenker')
                            cartState.calcETA('DB Schenker') 
                        }} />


                </RadioGroup>
                <ActionButtons stepIndex={stepIndex} onNext={this.onNextStep} onPrevious={onPrevious} />

            </FormControl>
            


        )}
    </CartConsumer>
    
);
}
}   




const priceStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
}