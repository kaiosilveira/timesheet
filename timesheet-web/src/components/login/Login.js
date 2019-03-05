import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TItle from '../_shared/title/Title'
import login from '../../store/actions/login/login'
import LoginForm from './login-form/LoginForm'
import restoreLoginErrors from '../../store/actions/restore-login-errors/restoreLoginErrors'

import './Login.css'

const Login = ({ onSubmit, onChange, loginError }) => (
    <section className="login-screen">
        <TItle text="Timesheet" />
        <LoginForm onSubmit={onSubmit} loginError={loginError} onChange={onChange} />
    </section>
)

const mapDispatchToProps = (dispatch, { history }) => ({
    onSubmit: (username, password) => {
        return dispatch(login(username, password))
        .then(() => history.push('/'))
    },
    onChange: () => dispatch(restoreLoginErrors())
})

export default withRouter(connect(({ loginError }) => ({ loginError }), mapDispatchToProps)(Login))