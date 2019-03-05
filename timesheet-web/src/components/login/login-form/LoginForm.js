import React from 'react'
import PropTypes from 'prop-types'
import ErrorMsg from '../../_shared/error-msg/ErrorMsg'
import './LoginForm.css'

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    render() {

        const { onSubmit, loginError } = this.props

        return (
            <div className="login-box">
                <form className="login-form" onSubmit={
                    e => {
                        e.preventDefault()
    
                        const username = this.state.username
                        const password = this.state.password
    
                        if (username && password) {
                            onSubmit(username, password)
                        } else {
                            this.setState({ errorMsg: 'Login e senha são de preenchimento obrigatório', hasError: true })
                        }
    
                }}>
                    <input className="input" value={this.state.username} onChange={this.handleUsernameChange} type="text" placeholder="username" />
                    <input className="input" value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="password" />
                    <button className="login-btn">Entrar</button>
                    <ErrorMsg text={this.state.errorMsg || loginError} visible={this.state.hasError || loginError} />
                </form>
            </div>
        )

    }

    handleUsernameChange(e) {
        this.props.onChange()
        const username = e.target.value
        this.setState({ username, hasError: false })
    }

    handlePasswordChange(e) {
        this.props.onChange()
        const password = e.target.value
        this.setState({ password, hasError: false })
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loginError: PropTypes.string.isRequired
}

export default LoginForm
