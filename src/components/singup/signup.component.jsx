import React from 'react';
import './signup.style.scss';
import Button from '../custom-button/custom-button.component.jsx';
import Input from '../form-input/form-input.component.jsx';
import {auth, createUserProfileDocument} from '../../firebase/firebase.util.js';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
        };
    }

    handleSubmit=(event) => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!=confirmPassword){
            alert("Password don't match");
            return;
        }
        try{
            const {user} =auth.createUserWithEmailAndPassword(email,password);
             createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(e){
                console.log(e)
        }
    }

    handleChange=(event) => {
        const {name , value} = event.target;
        this.setState({[name] : value});
    }

    render(){
        return(
            <div className="sign-up">
                <h2 className="title">I do not have account!</h2>
                <span>Sign up with you email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <Input 
                    type="text" 
                    name="displayName" 
                    value={this.state.displayName} 
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                    />
                    <Input 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleChange}
                    label="Email"
                    required
                    />
                    <Input 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    label="Password"
                    required
                    />
                    <Input 
                    type="password" 
                    name="confirmPassword" 
                    value={this.state.confirmPassword} 
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required
                    />
                    <Button type="submit">SIGN UP</Button>
                </form>
            </div>
        )
    }
}


export default SignUp;