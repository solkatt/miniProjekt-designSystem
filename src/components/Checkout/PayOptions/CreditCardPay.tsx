import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

export default function CreditCardPay(props :any) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          id="filled-name"
          label="Namn"
          type="name"
          value={props.value}
          InputLabelProps={{
            shrink: true,
          }}
        />
       
        <TextField
          id="filled-number"
          label="KortNummer"
          type="number"
          value={props.value}
          InputLabelProps={{
            shrink: true,
          }}
        />
            <TextField
          id="filled-number"
          label="CVC"
          type="number"
          value={props.value}
          InputLabelProps={{
            shrink: true,
          }}
        />
               <TextField
          id="filled-number"
          label="Date/Month"
          type="number"
          value={props.value}
          InputLabelProps={{
            shrink: true,
          }}
        />
       
       
      </div>
    </form>
  );
}