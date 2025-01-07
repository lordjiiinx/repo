'use client'
import axios from 'axios';
import * as React from 'react';
import {useGoogleLogin } from '@react-oauth/google';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Card from '../components/card';
import Container from '../components/container';

import { FacebookIcon, SitemarkIcon,GoogleIcon } from '../assets/CustomIcons'





export default function SignUp(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const loggo = useGoogleLogin({
    onSuccess: tokenresponse => console.log(tokenresponse)
})


  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };



  const fech=async(username,password)=>{
  
 
    axios.post('http://localhost/api/auth/token/',{
      username : username,
      password : password,
      grant_type : 'password',
      client_id: '3AoEhmSW2u6J3C03yzdRbNlOFhX0tIXymefxJUXS',
      client_secret: '',
 
  
    }).then((res)=>{
      if(res.status===200){
       console.log(res.data)
      
            
      }
    })
  
  }

 
  const handleSubmit = (event) => {
          event.preventDefault();

    const data = new FormData(event.currentTarget);

    if ( emailError || passwordError) {
      return;
    }
    

    else {
    fech(data.get('email'),data.get('password'))
    
    }
  };

  const handleclick = ()=>{
    
    axios.post('http://localhost/api/password_reset/',{
      email : ''
      
      
 
  
    }).then((res)=>{
      if(res.status===200){
       console.log(res.config)
      
            
      }
    })
  
  }
    
  

  return (

    <Container>


      <CssBaseline enableColorScheme >
      
      
        <Card variant="outlined">
          <SitemarkIcon />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>
          
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
        
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl
              
            >               <button onClick={handleclick}>
            {"Forgot password"}

          </button>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign up
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
             <Button
              fullWidth
              variant="outlined"
              onClick={() => {
                loggo()
              }}
              startIcon={<GoogleIcon />}
            >
              Sign up with google
            </Button>

           <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign up with Facebook')}
              startIcon={<FacebookIcon />}
            >
              Sign up with Facebook
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <Link
                href="/material-ui/getting-started/templates/sign-in/"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
        </CssBaseline>
        

        </Container>
    );
}