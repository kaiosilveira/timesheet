import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TItle from '../_shared/title/Title'
import LoginForm from './login-form/LoginForm'
import { login } from '../../store/user/duck'

import './Login.css'

const Login = ({ onSubmit, onChange, loginError }) => (
    <section className="login-screen">
        <TItle text="Timesheet" />
        <LoginForm onSubmit={onSubmit} />
    </section>
)

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password) => {
        return dispatch(login(username, password))
    }
})

export default withRouter(connect(({ loginError }) => ({ loginError }), mapDispatchToProps)(Login))