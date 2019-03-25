import React from 'react'
import PropTypes from 'prop-types'
import './LoginForm.css'

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = { username: '', password: '' }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    render() {

        const { onSubmit } = this.props

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
                </form>
            </div>
        )

    }

    handleUsernameChange(e) {
        const username = e.target.value
        this.setState({ username, hasError: false })
    }

    handlePasswordChange(e) {
        const password = e.target.value
        this.setState({ password, hasError: false })
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default LoginForm
