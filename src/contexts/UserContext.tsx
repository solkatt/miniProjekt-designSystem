import React, { createContext } from 'react';


interface UserInfo {
    name: string
    email: string
    tel: number
    zip: number
    city: string
    street: string
}
interface UserProps { }

interface UserState {
    userInfo: UserInfo
    stringErrorMessage: string
    numberErrorMessage: string
    emailErrorMessage: string
    isStepCompleted: boolean
    addName: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addTel: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addZip: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addStreet: (event: React.ChangeEvent<HTMLInputElement>) => void;
    test: () => void;
}

const UserContext = createContext<UserState>({
    userInfo: {
        email: "",
        name: "",
        tel: 0,
        zip: 0,
        city: "",
        street: ""
    },
    stringErrorMessage: "",
    numberErrorMessage: "",
    emailErrorMessage: "",
    isStepCompleted: false,
    addName: (event: React.ChangeEvent<HTMLInputElement>) => { },
    addEmail: (event: React.ChangeEvent<HTMLInputElement>) => { },
    addTel: (event: React.ChangeEvent<HTMLInputElement>) => { },
    addZip: (event: React.ChangeEvent<HTMLInputElement>) => { },
    addCity: (event: React.ChangeEvent<HTMLInputElement>) => { },
    addStreet: (event: React.ChangeEvent<HTMLInputElement>) => { },
    test: () => { },

});

export class UserProvider extends React.Component<UserProps, UserState> {
    constructor(props: UserProps) {
        super(props);
        this.state = {
            userInfo: {
                name: '',
                email: '',
                tel: 0,
                zip: 0,
                city: "",
                street: "",
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
            addStreet: this.addStreet,
            test: this.test,
        };
    }


    test = () => {
        console.log("test")
    }

    addName = (event : any) => {


        console.log(event.target.value);

        const name = event.target.value
        this.setState({ userInfo: { ...this.state.userInfo, name } });
        console.log(this.state.userInfo.name)

        // if (!name.includes('a') || !name.includes('ö')) {
        //     this.setState({ stringErrorMessage: 'Måste innehålla bokstäver' })
        // } else {
        //     this.setState({ stringErrorMessage: '' })
        // }
    }

    addEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        let email = event.target.value
        this.setState({ userInfo: { ...this.state.userInfo, email} });
        if (!email.includes('@') || !email.includes('.')) {
            this.setState({ emailErrorMessage: 'Måste innehålla bokstäver' })
        } else {
            this.setState({ emailErrorMessage: '' })
        }
    }
    
    addTel = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        const zip = Number(event.target.value)
        this.setState({ userInfo: { ...this.state.userInfo, zip } });
        if (!zip.toString().includes('0')) {
            this.setState({ numberErrorMessage: 'Måste innehålla siffror' })
        } else {
            this.setState({ numberErrorMessage: '' })
        }
    }
    
    addZip = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tel = Number(event.target.value)
        this.setState({ userInfo: { ...this.state.userInfo, tel } });
        if (!tel.toString().includes('1') || !tel.toString().includes('2')) {
            this.setState({ numberErrorMessage: 'Måste innehålla siffror' })
        } else {
            this.setState({ numberErrorMessage: '' })
        }
    }

    addCity = (event: React.ChangeEvent<HTMLInputElement>) => {
        const city = event.target.value
        this.setState({ userInfo: { ...this.state.userInfo, city } });
        if (!city.includes('a') || !city.includes('ö')) {
            this.setState({ stringErrorMessage: 'Måste innehålla bokstäver' })
        } else {
            this.setState({ stringErrorMessage: '' })
        }
    }

    addStreet = (event: React.ChangeEvent<HTMLInputElement>) => {
        const street = event.target.value
        this.setState({ userInfo: { ...this.state.userInfo, street } });
        if (!street.includes('a') || !street.includes('ö')) {
            this.setState({ stringErrorMessage: 'Måste innehålla bokstäver' })
        } else {
            this.setState({ stringErrorMessage: '' })
        }
    }


    // checkStep = () => {

    //  

    // for (int i = 0; i < userInfo.Length; i++)
    // {
    //     if (string.IsNullOrEmpty(arr[i]))
    //     {
    //         arr[i] = "Hello";
    //     }
    // }
    // }
    
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export const UserConsumer = UserContext.Consumer;
