import React from 'react';
import './signin.style.scss';

import FormInput from '../form-input/form-input.component.jsx';
import Button from '../custom-button/custom-button.component.jsx';
import {auth,signInWithGoogle} from '../../firebase/firebase.util.js';

class SingIn extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            email:'',
            password:'',
        }
        

    }

    handleSubmit=async (event) => {
        event.preventDefault();
        const {email, password}=this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        }catch (error){
                console.log(error);
        }
    }

    handleChange=(event) => {
        const {value,name} = event.target;
        this.setState({[name]:value});
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I have already an account!</h2>
                <span>Sing in with you email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange}  name="email" type="email" value={this.state.email} label="email" />
                    <FormInput handleChange={this.handleChange} name="password" type="password" value={this.state.password} label="password"  />
                    <div className="buttons">
                        <Button type="submit">SignIn</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>sign in with Google</Button>
                    </div>
                    
                </form>
            </div>

        );
    }

}

export default SingIn;