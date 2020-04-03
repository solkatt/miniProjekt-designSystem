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
  nameErrorMessage: string,
  emailErrorMessage: string,
  cityErrorMessage: string,
  streetErrorMessage: string,
  zipErrorMessage: string,
  telErrorMessage: string,
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
      nameErrorMessage: "",
      cityErrorMessage: "",
      streetErrorMessage: "",
      zipErrorMessage: "",
      telErrorMessage: "",
      isStepCompleted: false,

    };
  }

  onNextStep = () => {
    const { emailErrorMessage, 
      nameErrorMessage, 
      telErrorMessage, 
      streetErrorMessage, 
      cityErrorMessage, 
      zipErrorMessage, 
    } = this.state;
    
    const { email, 
      name, 
      tel, 
      street, 
      city, 
      zip, 
    } = this.props.cartState.userInfo;
    

    if (!emailErrorMessage &&
       !nameErrorMessage &&
       !telErrorMessage &&
       !streetErrorMessage &&
       !cityErrorMessage &&
       !zipErrorMessage &&
       email &&
       name &&
       tel &&
       street &&
       city &&
       zip
       )

       {  
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

  checkNameValidation = (prevProps: Props) => {

    const { name } = this.props.cartState.userInfo;
    const { name: prevName } = prevProps.cartState.userInfo;
    if(name !== prevName) {
      if (!name.match('[A-ö]')) {
        this.setState({ nameErrorMessage: 'Måste innehålla bokstäver' })
      } else {
        this.setState({ nameErrorMessage: '' })
      }
    }

  }

  checkZipValidation = (prevProps: Props) => {
    const { zip } = this.props.cartState.userInfo;
    const { zip: prevZip } = prevProps.cartState.userInfo;
    
    if (zip !== prevZip) {
        if (zip.match('[^0-9]')) {
          this.setState({ zipErrorMessage: 'Måste innehålla siffror' })
        } else {
          this.setState({ zipErrorMessage: '' })
        }

  }}

checkTelValidation = (prevProps: Props) => {
  const { tel } = this.props.cartState.userInfo;
  const { tel: prevTel } = prevProps.cartState.userInfo;
  if (tel !== prevTel) {
  if (tel.match('[^0-9]')) {
    this.setState({ telErrorMessage: 'Måste innehålla siffror' })
  } else {
    this.setState({ telErrorMessage: '' })
  }
}}

checkStreetValidation = (prevProps: Props) => {
  const { street } = this.props.cartState.userInfo;
  const { street: prevStreet } = prevProps.cartState.userInfo;
  if (street !== prevStreet) {
  if (!street.match('[A-ö]') && !street.match('[^0-9]')) {
    this.setState({ streetErrorMessage: 'Måste innehålla bokstäver och siffror' })
  } else {
    this.setState({ streetErrorMessage: '' })
  }
  }
}


checkCityValidation = (prevProps: Props) => {
  const { city } = this.props.cartState.userInfo;
  const { city: prevCity } = prevProps.cartState.userInfo;
  if(city !== prevCity) {
    if (!city.match('[A-ö]')) {
      this.setState({ cityErrorMessage: 'Måste innehålla bokstäver' })
    } else {
      this.setState({ cityErrorMessage: '' })
    }
  }
}

  componentDidUpdate(prevProps: Props) {
    this.checkEmailValidation(prevProps)
    this.checkNameValidation(prevProps)
    this.checkStreetValidation(prevProps)
    this.checkTelValidation(prevProps)
    this.checkCityValidation(prevProps)
    this.checkZipValidation(prevProps)
  }


  render() {
    const { cartState, stepIndex, onNext, onPrevious } = this.props;
    const { emailErrorMessage, nameErrorMessage, telErrorMessage, streetErrorMessage, cityErrorMessage, zipErrorMessage, } = this.state;

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
          onChange={(event: any) => cartState.addName(event.target.value)}
          value={cartState.userInfo.name}
          error={Boolean(nameErrorMessage)}
          helperText={nameErrorMessage}
        />

        <TextField
          required
          id="tel"
          label="Mobilnummer"
          type="tel"
          variant="standard"
          value={cartState.userInfo.tel}
          onChange={(event: any) => cartState.addTel(event.target.value)}
          error={Boolean(telErrorMessage)}
          helperText={telErrorMessage}
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
          variant="standard"
          value={cartState.userInfo.street}
          onChange={(event: any) => cartState.addStreet(event.target.value)}
          error={Boolean(streetErrorMessage)}
          helperText={streetErrorMessage}
        />

        <TextField
          required
          id="zip"
          label="Postnummer"
          type="zip"
          variant="standard"
          value={cartState.userInfo.zip}
          onChange={(event: any) => cartState.addZip(event.target.value)}
          error={Boolean(zipErrorMessage)}
          helperText={zipErrorMessage}
        />

        <TextField
          required
          id="city"
          label="Ort"
          type="text"
          variant="standard"
          value={cartState.userInfo.city}
          onChange={(event: any) => cartState.addCity(event.target.value)}
          error={Boolean(cityErrorMessage)}
          helperText={cityErrorMessage}
        />
        <ActionButtons stepIndex={stepIndex} onNext={this.onNextStep} onPrevious={onPrevious} />
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
