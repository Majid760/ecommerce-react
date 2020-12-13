import React from 'react';
import SignIn from '../../components/signin/signin.component.jsx';
import SignUp from '../../components/singup/signup.component.jsx';
import './signUpInPage.style.scss';

const SingUpIn=()=>(

    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>

);

export default SingUpIn;