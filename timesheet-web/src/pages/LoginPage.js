import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from '../components/login/Login'
import { login } from '../store/user/duck'

const LoginPage = ({ onSubmit }) => (
    <Login onSubmit={onSubmit} />
)

LoginPage.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password) => {
        return dispatch(login(username, password))
    }
})

export default withRouter(connect(null, mapDispatchToProps)(LoginPage))
