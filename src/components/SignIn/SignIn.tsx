import React from 'react';
import { useState } from 'react';
import UserAuth from '../../models/userauth/UserAuth';
import SignInView from './../../views/SignInView/SignInView';
import { FirebaseError } from 'firebase/app'

type Props = {};

function SignIn({ }: Props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const auth = async () => {
        if (email === "" || password === "") {
            return alert("Please fill all fields");
        }

        const result = await UserAuth.authUser(email, password)

        if (!result) {
            return alert("Invalid signin")
        }
    }

    return (
        <div className='signin-form'>
            <input type="email" placeholder="email" onChange={(e) => handleEmail(e)} />
            <input type="password" placeholder='pass' onChange={(e) => handlePassword(e)} />
            <button onClick={() => auth()}>SignIn</button>
        </div >
    );
}

export default SignIn;