import React, { CSSProperties } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { UserConsumer } from "../../contexts/UserContext";

interface UserInfo {
  name: string;
  email: string;
  tel: number;
  zip: number;
  city: string;
  street: string;
}
interface UserProps {}

export interface UserState {
  userInfo: UserInfo;
  stringErrorMessage: string;
  numberErrorMessage: string;
  emailErrorMessage: string;
  isStepCompleted: boolean;
  addName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addTel: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addZip: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addStreet: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

interface Props {}

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
      addName: this.addName,
      addEmail: this.addEmail,
      addTel: this.addTel,
      addZip: this.addZip,
      addCity: this.addCity,
      addStreet: this.addStreet
    };
  }

  addEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    let email = event.target.value;
    this.setState({ userInfo: { ...this.state.userInfo, email } });
    if (!email.includes("@") || !email.includes(".")) {
      this.setState({ emailErrorMessage: "Måste innehålla bokstäver" });
    } else {
      this.setState({ emailErrorMessage: "" });
    }
  };

  addName = (event: any) => {
    console.log(event.target.value);

    const name = event.target.value;
    this.setState({ userInfo: { ...this.state.userInfo, name } });
    console.log(this.state.userInfo.name);

    // if (!name.includes('a') || !name.includes('ö')) {
    //     this.setState({ stringErrorMessage: 'Måste innehålla bokstäver' })
    // } else {
    //     this.setState({ stringErrorMessage: '' })
    // }
  };

  addZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const zip = Number(event.target.value);
    this.setState({ userInfo: { ...this.state.userInfo, zip } });
    if (!zip.toString().includes("1") || !zip.toString().includes("2")) {
      this.setState({ numberErrorMessage: "Måste innehålla siffror" });
    } else {
      this.setState({ numberErrorMessage: "" });
    }
  };

  addTel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tel = Number(event.target.value);
    this.setState({ userInfo: { ...this.state.userInfo, tel } });
    if (!tel.toString().includes("1") || !tel.toString().includes("2")) {
      this.setState({ numberErrorMessage: "Måste innehålla siffror" });
    } else {
      this.setState({ numberErrorMessage: "" });
    }
  };

  addCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const city = event.target.value;
    this.setState({ userInfo: { ...this.state.userInfo, city } });
    if (!city.includes("a") || !city.includes("ö")) {
      this.setState({ stringErrorMessage: "Måste innehålla bokstäver" });
    } else {
      this.setState({ stringErrorMessage: "" });
    }
  };

  addStreet = (event: React.ChangeEvent<HTMLInputElement>) => {
    const street = event.target.value;
    this.setState({ userInfo: { ...this.state.userInfo, street } });
    if (!street.includes("a") || !street.includes("ö")) {
      this.setState({ stringErrorMessage: "Måste innehålla bokstäver" });
    } else {
      this.setState({ stringErrorMessage: "" });
    }
  };

  render() {
    return (
      <UserConsumer>
        {(userState )=> (
        
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
                onChange={(event: any) => this.state.addName(event)}
                value={this.state.userInfo.name}
              />
              <TextField
                required
                style={{ marginTop: "2rem" }}
                // id="email"
                label="E-post"
                type="email"
                variant="standard"
                value={this.state.userInfo.email}

                onChange={(event: any) => this.state.addEmail(event)}
                error={Boolean(userState.emailErrorMessage)}
                helperText={userState.emailErrorMessage}
              />
              <TextField
                required
                id="tel"
                label="Mobilnummer"
                type="tel"
                variant="standard"
                value={this.state.userInfo.tel}

                onChange={(event: any) => this.state.addTel(event)}
              />


              <TextField
                required
                id="street"
                label="Adress"
                type="text"
                variant="filled"
                value={this.state.userInfo.street}

                onChange={(event: any) => this.state.addStreet(event)}
              />

              <TextField
                required
                id="zip"
                label="Postnummer"
                type="number"
                variant="filled"
                value={this.state.userInfo.zip}

                onChange={(event: any) => this.state.addZip(event)}
              />

              <TextField
              required
               id="city"
                label="Ort"
                 type="text"
                  variant="filled"    
                  value={this.state.userInfo.city}

              onChange={(event: any) => this.state.addCity(event)}

                  
                  />
            </form>
          </div>
        )}
      </UserConsumer>
    );
  }
}

export default CheckoutForm;

const CheckoutFormStyle: CSSProperties = {
  // width: '100vw',
  // display: 'flex',
  // flexDirection: 'row'
};
