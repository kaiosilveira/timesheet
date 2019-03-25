import React from 'react'

import TItle from '../_shared/title/Title'
import LoginForm from './login-form/LoginForm'

import './Login.css'

const Login = ({ onSubmit }) => (
    <section className="login-screen">
        <TItle text="Timesheet" />
        <LoginForm onSubmit={onSubmit} />
    </section>
)

export default Login