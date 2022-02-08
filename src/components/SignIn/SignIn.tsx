// React Imports
import React, { useEffect, useState } from 'react';

// User Auth Model
import UserAuth from '../../models/userauth/UserAuth';

// MUI Imports
import { 
    TextField, 
    Button, 
    FormHelperText, 
    Checkbox, 
    FormControlLabel, 
    Box, 
    Paper,
    Typography
} from '@mui/material';

// Styles
import './SignIn.css'

import { useNavigate } from 'react-router-dom';

type Props = {};

function SignIn({ }: Props) {

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const [signinError, setsigninError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
    const navigate = useNavigate()

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

        return navigate('/')
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
        <Paper className='signin-form'>
            <Typography variant="h4" sx={{textAlign: 'center', mb:3, fontWeight: 500}}>Sign In</Typography>
            <Box className='signin-form-inputs'>
                <TextField
                    variant="outlined"
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
                    variant="outlined" 
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
                <Typography component="a" sx={{mt:2}} href="#">Forgot your password?</Typography>
            </Box>
        </Paper>
    );
}

export default SignIn;