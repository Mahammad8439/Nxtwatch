import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginCardContainer,
  LoginContainer,
  Logo,
  LoginFormContainer,
  CustomInput,
  LabelText,
  CheckBoxInput,
  LoginButton,
  CustomText,
} from './loginFormStyleComponent'

class LoginForm extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
  }

  renderUserInput = () => {
    const {username} = this.state

    return (
      <>
        <LabelText padding={10} htmlFor="username">
          USERNAME
        </LabelText>
        <CustomInput
          id="username"
          type="text"
          placeholder="Username"
          onChange={this.onChangeUserName}
          value={username}
        />
      </>
    )
  }

  onShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordInput = () => {
    const {password, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'

    return (
      <>
        <LabelText padding={10} htmlFor="password">
          PASSWORD
        </LabelText>
        <CustomInput
          id="password"
          type={passwordType}
          placeholder="Password"
          onChange={this.onchangePassword}
          value={password}
        />
      </>
    )
  }

  render() {
    const {showPassword, showErrorMsg, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <LoginCardContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
          <LoginFormContainer onSubmit={this.submitForm}>
            {this.renderUserInput()}
            {this.renderPasswordInput()}
            <CheckBoxInput
              id="checkbox"
              type="checkbox"
              checked={showPassword}
              onChange={this.onShowPassword}
            />
            <LabelText htmlFor="checkbox" padding={0} item>
              Show Password
            </LabelText>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && (
              // eslint-disable-next-line react/no-unescaped-entities
              <CustomText>*{errorMsg}</CustomText>
            )}
          </LoginFormContainer>
        </LoginCardContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
