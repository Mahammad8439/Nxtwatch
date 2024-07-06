import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import HeaderContext from '../../context/HeaderContext'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import GamingList from '../GamingList'

import {
  GamingContainer,
  GamingHeadingContainer,
  GamingIconContainer,
  GamingMainHeading,
  LoaderContainer,
  GamingListContainer,
} from './gamingStyledComponent'

const apiStatusConstants = {
  success: 'SUCCESS',
  inprogress: 'INPROGRESS',
  failed: 'FAILED',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, videosList: []}

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedData,
      })
    }
  }

  renderSpinner = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color=" #3b82f6" />
    </LoaderContainer>
  )

  renderGamingVideos = () => (
    <HeaderContext.Consumer>
      {value => {
        const {isDark} = value
        const {videosList} = this.state

        console.log(videosList)

        return (
          <GamingListContainer>
            {videosList.map(each => (
              <GamingList key={each.id} item={each} />
            ))}
          </GamingListContainer>
        )
      }}
    </HeaderContext.Consumer>
  )

  renderGamingPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inprogress:
        return this.renderSpinner()
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      default:
        return null
    }
  }

  render() {
    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDark} = value
          console.log(isDark)

          return (
            <>
              <Header />
              <NavigationBar />
              <GamingContainer activeDark={isDark}>
                <GamingHeadingContainer activeDark={isDark}>
                  <GamingIconContainer activeDark={isDark}>
                    <SiYoutubegaming size={40} color="#FF031C" />
                  </GamingIconContainer>
                  <GamingMainHeading activeDark={isDark}>
                    Gaming
                  </GamingMainHeading>
                </GamingHeadingContainer>
                {this.renderGamingPage()}
              </GamingContainer>
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default Gaming
