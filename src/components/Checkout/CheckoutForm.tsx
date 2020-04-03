import React, { CSSProperties } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CartConsumer, CartState } from "../../contexts/CartContext";
import ActionButtons, { Props as ActionButtonProps } from "../Stepper/actionButtons";

interface UserInfo {
  name: string;
  email: string;
  tel: number;
  zip: number;
  city: string;
  street: string;
}

export interface State {
  userInfo: UserInfo;
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

interface Props extends ActionButtonProps {
  cartState: CartState
}

class CheckoutForm extends React.Component<Props, State> {
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
      emailErrorMessage: "",
      isStepCompleted: false,

    };
  }

  onNextStep = () => {
    const { emailErrorMessage } = this.state;

    if (!emailErrorMessage) {
      this.props.onNext()
    }
  }

  checkEmailValidation = (prevProps: Props) => {
    const { email } = this.props.cartState.userInfo;
    const { email: prevEmail } = prevProps.cartState.userInfo;
    if (email !== prevEmail) {
      if (!email.includes('@') || !email.includes('.')) {
        this.setState({ emailErrorMessage: 'Måste vara en riktig email, ex: namn@email.com' })
      } else {
        this.setState({ emailErrorMessage: '' })
      }
    }
  }

  componentDidUpdate(prevProps: Props) {
    this.checkEmailValidation(prevProps)
  }


  render() {
    const { cartState, stepIndex, onNext, onPrevious} = this.props;
    const { emailErrorMessage } = this.state;

    return (
      <form
        style={CheckoutFormStyle}
        // className={classes.root}
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
          error={Boolean(cartState.nameErrorMessage)}
          helperText={cartState.nameErrorMessage}
        />

        <TextField
          required
          id="tel"
          label="Mobilnummer"
          type="tel"
          variant="standard"
          value={cartState.userInfo.tel}
          onChange={(event: any) => cartState.addTel(event)}
          error={Boolean(cartState.telErrorMessage)}
          helperText={cartState.telErrorMessage}
        />
        <TextField
          required
          style={{ marginTop: "2rem" }}
          id="email"
          label="E-post"
          type="email"
          variant="standard"
          value={cartState.userInfo.email}

          onChange={(event) => cartState.addEmail(event.target.value)}
          error={Boolean(emailErrorMessage)}
          helperText={emailErrorMessage}
        />

        <TextField
          required
          id="street"
          label="Adress"
          type="text"
          variant="filled"
          value={cartState.userInfo.street}
          onChange={(event: any) => cartState.addStreet(event)}
          error={Boolean(cartState.streetErrorMessage)}
          helperText={cartState.streetErrorMessage}
        />

        <TextField
          required
          id="zip"
          label="Postnummer"
          type="zip"
          variant="filled"
          value={cartState.userInfo.zip}
          onChange={(event: any) => cartState.addZip(event)}
          error={Boolean(cartState.zipErrorMessage)}
          helperText={cartState.zipErrorMessage}
        />

        <TextField
          required
          id="city"
          label="Ort"
          type="text"
          variant="filled"
          value={cartState.userInfo.city}
          onChange={(event: any) => cartState.addCity(event)}
          error={Boolean(cartState.cityErrorMessage)}
          helperText={cartState.cityErrorMessage}
        />
        <ActionButtons stepIndex={stepIndex} onNext={this.onNextStep} onPrevious={onPrevious}/>
      </form>
    );
  }
}

export default CheckoutForm;

const CheckoutFormStyle: CSSProperties = {
  // width: '100vw',
  // display: 'flex',
  // flexDirection: 'row'
};
