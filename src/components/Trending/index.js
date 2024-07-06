import {HiFire} from 'react-icons/hi'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import HeaderContext from '../../context/HeaderContext'

import {
  TrendingContainer,
  TrendingHeadingContainer,
  IconContainer,
  MainHeading,
  TrendingListContainer,
  // eslint-disable-next-line import/named
  LoaderContainer,
} from './trendingStyledComponents'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import TrendingList from '../TrendingList'

const apiStatusConstants = {
  success: 'SUCCESS',
  inprogress: 'INPROGRESS',
  failed: 'FAILED',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, videosList: []}

  componentDidMount() {
    this.getTrending()
  }

  getTrending = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
      }))

      console.log(updatedData)
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

  renderTrendingVideos = () => (
    <HeaderContext.Consumer>
      {value => {
        const {isDark} = value
        const {videosList} = this.state

        return (
          <TrendingListContainer>
            {videosList.map(each => (
              <TrendingList key={each.id} videosItem={each} isDark />
            ))}
          </TrendingListContainer>
        )
      }}
    </HeaderContext.Consumer>
  )

  renderTrendingPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inprogress:
        return this.renderSpinner()
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      default:
        return null
    }
  }

  render() {
    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <NavigationBar />
              <TrendingContainer activeDark={isDark}>
                <TrendingHeadingContainer activeDark={isDark}>
                  <IconContainer activeDark={isDark}>
                    <HiFire size={40} color="#FF031C" />
                  </IconContainer>
                  <MainHeading activeDark={isDark}>Trending</MainHeading>
                </TrendingHeadingContainer>
                {this.renderTrendingPage()}
              </TrendingContainer>
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default Trending
