import React, { CSSProperties } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CartConsumer } from "../../contexts/CartContext";

interface UserInfo {
  name: string;
  email: string;
  tel: number;
  zip: number;
  city: string;
  street: string;
}
interface UserProps { }

export interface UserState {
  userInfo: UserInfo;
  stringErrorMessage: string;
  numberErrorMessage: string;
  emailErrorMessage: string;
  isStepCompleted: boolean;

}

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

interface Props { }

class CheckoutForm extends React.Component<UserProps, UserState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        email: "",
        tel: 0,
        zip: 0,
        city: "",
        street: ""
      },
      stringErrorMessage: "",
      numberErrorMessage: "",
      emailErrorMessage: "",
      isStepCompleted: false,

    };
  }


  render() {
    return (
      <CartConsumer>
        {(cartState) => (

          <div>
            {" "}
            <form
              style={CheckoutFormStyle}
              // className={classes.root}
              noValidate
              autoComplete="on"
            >



              <TextField
                required
                id="name"
                label="Namn"
                type="name"
                variant="standard"
                onChange={(event: any) => cartState.addName(event)}
                value={cartState.userInfo.name}
              />
              <TextField
                required
                style={{ marginTop: "2rem" }}
                id="email"
                label="E-post"
                type="email"
                variant="standard"
                value={cartState.userInfo.email}

                onChange={(event: any) => cartState.addEmail(event)}
              // error={Boolean(userState.emailErrorMessage)}
              // helperText={userState.emailErrorMessage}
              />
              <TextField
                required
                id="tel"
                label="Mobilnummer"
                type="tel"
                variant="standard"
                value={cartState.userInfo.tel}
                onChange={(event: any) => cartState.addTel(event)}
              />

              <TextField
                required
                id="street"
                label="Adress"
                type="text"
                variant="filled"
                value={cartState.userInfo.street}
                onChange={(event: any) => cartState.addStreet(event)}
              />

              <TextField
                required
                id="zip"
                label="Postnummer"
                type="zip"
                variant="filled"
                value={cartState.userInfo.zip}
                onChange={(event: any) => cartState.addZip(event)}
              />

              <TextField
                required
                id="city"
                label="Ort"
                type="text"
                variant="filled"
                value={cartState.userInfo.city}
                onChange={(event: any) => cartState.addCity(event)}
              />
            </form>
          </div>
        )}
      </CartConsumer>
    );
  }
}

export default CheckoutForm;

const CheckoutFormStyle: CSSProperties = {
  // width: '100vw',
  // display: 'flex',
  // flexDirection: 'row'
};
