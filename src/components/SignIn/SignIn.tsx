import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'

// User Auth Model
import UserAuth from '../../models/userauth/UserAuth';

// Mui
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    TextField,
    Button,
    FormHelperText,
    Checkbox,
    FormControlLabel,
    Box,
    Paper,
    Typography,
    OutlinedInput,
    InputAdornment,
    IconButton,
    InputLabel,
    FormControl
} from '@mui/material';


type Props = {};

function SignIn({ }: Props) {

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const [signinError, setsigninError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [values, setValues] = React.useState({
        showPassword: true,
    });

    const navigate = useNavigate()

    const handleEmail = (e: any) => { setEmail(e.target.value) };
    const handlePassword = (e: any) => { setPassword(e.target.value) };

    const checkEmptyEmail = () => email === "";
    const checkEmptyPassword = () => password === "";

    const auth = async () => {
        if (checkEmptyEmail()) {
            setEmailError(true);
        }

        if (checkEmptyPassword()) {
            setPasswordError(true);
        }

        if (emailError || passwordError) {
            return false;
        }

        const result = await UserAuth.authUser(email, password);

        if (!result) {
            return setsigninError(true);
        }

        return navigate('/')
    }

    const handleEnter = (e: any) => {
        if (e.key == "Enter") {
            auth();
        }
    }

    const handleClickShowPassword = () => {
        setValues({
            showPassword: !values.showPassword
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    useEffect(() => {
        setsigninError(false)
        if (checkEmptyEmail()) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }, [email])

    useEffect(() => {
        setsigninError(false)
        if (checkEmptyPassword()) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
    }, [password])

    return (
        <Paper className='signin-form'>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 500 }}>Sign In</Typography>
            <Box className='signin-form-inputs'>
                <TextField
                    variant="outlined"
                    label="Email"
                    type={"email"}
                    onChange={(e) => handleEmail(e)}
                    className="signin-input"
                    sx={{ pb: 3 }}
                    error={emailError}
                    onKeyDown={(e) => handleEnter(e)}
                    helperText={emailError ? "Please fill this field" : null}
                    fullWidth
                />
                <FormControl sx={{ width: '100%', pb: 2 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-password'
                        type={!values.showPassword ? 'text' : 'password'}
                        onChange={(e) => handlePassword(e)}
                        className="signin-input"
                        error={passwordError}
                        onKeyDown={(e) => handleEnter(e)}
                        //helperText={passwordError ? "Please fill this field" : null}
                        fullWidth
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    <FormHelperText>
                        {passwordError ? "Please fill this field" : null}
                    </FormHelperText>
                </FormControl>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Remember Me"
                    sx={{ pb: 1 }}
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
                <FormHelperText sx={{ fontSize: '1rem' }} error>
                    {signinError ? "Invalid SignIn" : null}
                </FormHelperText>
                <Typography component="a" sx={{ mt: 2 }} href="#">Forgot your password?</Typography>
            </Box>
        </Paper>
    );
}

export default SignIn;