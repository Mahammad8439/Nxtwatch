import HeaderContext from '../../context/HeaderContext'

import {
  FailureViewContainer,
  FailureViewImg,
  FailedText,
  RetryButton,
  FailedDescribe,
} from './failureViewStyleComponent'

const FailureView = props => {
  const {isRetry} = props

  const onTry = () => {
    isRetry()
  }

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDark} = value

        const failureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureViewImg src={failureImg} alt={failureImg} />
            <FailedText activeDark={isDark}>
              Oops! Something Went Wrong
            </FailedText>
            <FailedDescribe activeDark={isDark}>
              We are having some trouble to complete your request.Please try
              again
            </FailedDescribe>
            <RetryButton onClick={onTry}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </HeaderContext.Consumer>
  )
}

export default FailureView
