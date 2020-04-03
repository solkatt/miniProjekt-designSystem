import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CartConsumer } from '../../../contexts/CartContext';

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

export default function SwishPay(props :any) {
  const classes = useStyles();


console.log(props)


  return (
      <CartConsumer> 
      {(cartState) => (
        <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="filled"
          label="Nummer"
          type="text"
          value={cartState.userInfo.tel}
          InputLabelProps={{
            shrink: true,
          }}
          />
       
      </div>
    </form>
          )}
          </CartConsumer>
  );
}