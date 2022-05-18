import AuthForm from "../components/authForm";
import React from 'react'

const Signup = () => {
  return (
    <AuthForm mode='signup'></AuthForm>
    )
}

Signup.authPage = true;



export default Signup