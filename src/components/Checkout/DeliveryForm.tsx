import React, { CSSProperties } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { CartConsumer } from '../../contexts/CartContext';


export default function DeliveryForm() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const Leveranstid2veckor = "Leveranstid ca 2 veckor"


return (

    <CartConsumer>
        {(cartState) => (


            <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel style={priceStyle} value="postnord" control={<Radio />} label="Postnord 99kr"
                        onChange={() => {
                            cartState.addShipping('Postnord')
                            cartState.calcETA('Postnord') 
                        }} />

                    <FormControlLabel value="dhl" control={<Radio />} label="DHL 79kr Leveranstid: 1 - 2 dagar"
                        onChange={() => {
                            cartState.addShipping('DHL')
                        }}
                    />

                    <FormControlLabel value="dbschenker" control={<Radio />} label="DB Schenker 39kr Leveranstid: 3 - 4 dagar"
                        onChange={() => {
                            cartState.addShipping('DB Schenker')
                        }} />


                </RadioGroup>
            </FormControl>


        )}
    </CartConsumer>
);
}   




const priceStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
}