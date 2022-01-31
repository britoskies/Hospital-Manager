// React Imports
import React, { useEffect, useState } from 'react';

// User Auth Model
import UserAuth from '../../models/userauth/UserAuth';

// MUI Imports
import { TextField, Button, FormHelperText, Checkbox, FormControlLabel, Box } from '@mui/material';

// Styles
import './SignIn.css'

type Props = {};

function SignIn({ }: Props) {

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const [signinError, setsigninError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const checkEmptyEmail = () => {
        return (email === "")
    }

    const checkEmptyPassword = () => {
        return (password === "")
    }

    const auth = async () => {
        if(checkEmptyEmail()) {
            setEmailError(true)
        }

        if(checkEmptyPassword()) {
            setPasswordError(true)
        }

        if(emailError || passwordError) {
            return false
        }

        const result = await UserAuth.authUser(email, password)

        if (!result) {
            return setsigninError(true)
        }
    }

    const handleEnter = (e: any) => {
        if(e.key == "Enter") {
            auth()
        }
    }

    useEffect(() => {
        setsigninError(false)
        if(checkEmptyEmail()) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }, [email])

    useEffect(() => {
        setsigninError(false)
        if(checkEmptyPassword()) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
    }, [password])

    return (
        <div className='signin-form'>
            <Box className='signin-form-inputs'>
                <TextField
                    variant="filled" 
                    label="Email" 
                    type={"email"}
                    onChange={(e) => handleEmail(e)}
                    className="signin-input"
                    sx={{pb: 3}}
                    error={emailError}
                    onKeyDown={(e) => handleEnter(e)}
                    helperText={emailError ? "Please fill this field" : null}
                    fullWidth
                />
                <TextField 
                    variant="filled" 
                    label="Password" 
                    type={"password"} 
                    onChange={(e) => handlePassword(e)}
                    className="signin-input"
                    sx={{pb: 1}}
                    error={passwordError}
                    onKeyDown={(e) => handleEnter(e)}
                    helperText={passwordError ? "Please fill this field" : null}
                    fullWidth
                />
                <FormControlLabel 
                    control={<Checkbox/>} 
                    label="Remember Me" 
                    sx={{pb: 1}}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => auth()}
                    fullWidth
                    disableElevation
                >
                    SignIn
                </Button>
            </Box>
            <Box 
                className="signin-form-helpers"
                sx={{
                        display: 'flex', 
                        justifyContent: 'space-between'
                }}
            >
                <FormHelperText sx={{fontSize: '1rem'}} error>
                    {signinError ? "Invalid SignIn" : null}
                </FormHelperText>
                <a href="#">Forgot your password?</a>
            </Box>
        </div >
    );
}

export default SignIn;