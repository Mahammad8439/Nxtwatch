import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 20px;
`

export const FailureViewImg = styled.img`
  width: 50%;
  margin-bottom: 20px;
`
export const FailedText = styled.h1`
  font-size: 20px;
  color: ${props => (props.activeDark ? '#ffff' : '#313439')};
`
export const FailedDescribe = styled.p`
  font-size: 14px;
  color: ${props => (props.activeDark ? '#ffff' : '#A1A4A5')};
`
export const RetryButton = styled.button`
  background-color: #3b82f6;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  width: 80px;
  color: #ffff;
`
