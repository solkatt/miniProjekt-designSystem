import React, { CSSProperties } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export default function CheckoutForm() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>


            <FormControl component="fieldset">


                <TextField style={{ marginTop: '2rem' }} id="outlined-epost" label="E-post" type="email" variant="outlined" />
                <TextField id="outlined-mobilnummer" label="Mobilnummer" type="tel" variant="outlined" />

                <TextField
                    style={formSpacing}
                    id="outlined-personnumer"
                    label="Personnummer"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />





                <TextField id="outlined-fornamn" label="Förnamn" type="fname" variant="standard" />
                <TextField style={formSpacing}
                    id="outlined-efternamn" label="Efternamn" type="lname" variant="standard" />




                <TextField id="outlined-address" label="Adress" type="text" variant="filled" />

                <TextField id="outlined-postnummer" label="Postnummer" type="number" variant="filled" />

                <TextField id="outlined-ort" label="Ort" type="text" variant="filled" />


</FormControl>

            </div>
        </form>
    );
}


const formSpacing: CSSProperties = {
    marginBottom: '2rem',
}