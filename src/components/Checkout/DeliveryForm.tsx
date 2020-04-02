import React, { CSSProperties } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function DeliveryForm() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };


const data = {
    pris: 0,
}



    const testClick = (props: any) => {

        //case 'Postnord':
          //  console.log('postnord');
        // break;
        //
        //

        if(props == 'postnord') {
            data.pris = 0
            console.log('POSTNORD VALT')
            data.pris = 99
            console.log(data.pris)
           
        } else if (props == 'DHL') {
            data.pris = 0
            console.log('POSTNORD VALT')
            data.pris = 9999
            console.log(data.pris)
        }





    }
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel style={priceStyle} value="postnord" control={<Radio />} label="Postn" 
                onChange={() => {testClick('postnord')}}/>
              
        
                <FormControlLabel value="dhl" control={<Radio />} label="DHL" />
                <FormControlLabel value="dbschenker" control={<Radio />} label="DB Schenker"
           onChange={() => {testClick('DHL')}}/>
            </RadioGroup>
        </FormControl>
    );
}




const priceStyle :CSSProperties = {
display: 'flex',
flexDirection: 'row'
}