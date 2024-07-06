import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
`
export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  width: 380px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  background-color: #ffff;
`

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 30px;
`
export const LoginFormContainer = styled.form`
  width: 80%;
`
export const LabelText = styled.label`
  font-size: 15px;
  color: ${props => (props.item ? '#1e293b' : '#94a3b8')};
  margin-top: ${props => `${props.padding}px`};
`
export const CustomInput = styled.input`
  width: 100%;
  padding: 7px;
  border: #e2e8f0 1.5px solid;
  margin-bottom: 10px;
  outline: none;
`
export const CheckBoxInput = styled.input`
  margin-right: 10px;
`
export const LoginButton = styled.button`
  background-color: #1e80ee;
  padding: 8px;
  color: #ffff;
  width: 100%;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
`
export const CustomText = styled.p`
  font-size: 14px;
  color: #ff0000;
  margin-top: 0;
`
