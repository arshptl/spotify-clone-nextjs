import AuthForm from "../components/authForm";
import React from 'react'

const Signin = () => {
  return (
    <AuthForm mode='signin'></AuthForm>
    )
}

Signin.authPage = true;

export default Signin