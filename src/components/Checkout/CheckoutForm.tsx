import React, { CSSProperties } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface State {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch"
      }
    }
  })
);

interface Props {
  test: (phone: any) => void;
}

class CheckoutForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form
          style={CheckoutFormStyle}
          // className={classes.root}
          noValidate
          autoComplete="on"
        >
          <TextField
            style={{ marginTop: "2rem" }}
            id="email"
            label="E-post"
            type="email"
            variant="outlined"
          />
          <TextField
            id="tel"
            label="Mobilnummer"
            type="tel"
            variant="outlined"
            onChange={(event: any) => {
              this.props.test(event.target.value);
            }}
          />

          <TextField
            id="date"
            label="Personnummer"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />

          <TextField
            id="fname"
            label="Förnamn"
            type="fname"
            variant="standard"
          />
          <TextField
            id="lname"
            label="Efternamn"
            type="lname"
            variant="standard"
          />

          <TextField id="street" label="Adress" type="text" variant="filled" />

          <TextField
            id="zip"
            label="Postnummer"
            type="number"
            variant="filled"
          />

          <TextField id="city" label="Ort" type="text" variant="filled" />
        </form>
      </div>
    );
  }
}

export default CheckoutForm;

const formSpacing: CSSProperties = {
  marginBottom: "2rem"
};

const CheckoutFormStyle: CSSProperties = {
  // width: '100vw',
  // display: 'flex',
  // flexDirection: 'row'
};
