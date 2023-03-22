import { GoogleLogin } from "@react-oauth/google";

import React from 'react'
import { login } from "../services/auth";
import { AuthBtn } from "../styles/app.styled";

export const Login = ({setUser}) => {
  return (
    <AuthBtn>
    Login
    <GoogleLogin
        type='icon'
        size="small"
        
        onSuccess={credentialResponse => {
            setUser(login(credentialResponse))
        }}
        onError={() => {
            console.log('Login Failed');
        }}
    />
    </AuthBtn>
  )
}

