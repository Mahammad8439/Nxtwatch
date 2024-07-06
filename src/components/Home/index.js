import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoClose} from 'react-icons/io5'
import {FaSearch} from 'react-icons/fa'

import HeaderContext from '../../context/HeaderContext'

import {
  HomeContainer,
  BannerContainer,
  BannerTextContainer,
  Logo,
  CusText,
  BuyNowButton,
  CloseButton,
  InputSearch,
  SearchButton,
  SearchContainer,
  LoaderContainer,
  VideosListContainer,
  NoVideoImg,
  NoVideoListContainer,
  CustomHeading,
  CustomDescribe,
  TryButton,
} from './homeStyleComponent'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'
import FailureView from '../FailureView'

const apiStatusConstants = {
  success: 'SUCCESS',
  inprogress: 'INPROGRESS',
  failed: 'FAILED',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    banner: 'flex',
    apiStatus: apiStatusConstants.initial,
    search: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const {search} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updateData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedDate: each.published_at,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updateData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failed})
    }
  }

  onchangeInput = event => {
    this.setState({search: event.target.value})
  }

  onSubmitSearch = () => {
    this.getVideos()
  }

  onCloseBanner = () => {
    this.setState({banner: 'none'})
  }

  onRetry = () => {
    this.setState({search: ''}, this.getVideos)
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color=" #3b82f6" />
    </LoaderContainer>
  )

  renderFailedPage = () => <FailureView isRetry={this.onRetry} />

  renderVideosListPage = () => {
    const {videosList} = this.state

    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              {videosList.length > 0 ? (
                <VideosListContainer>
                  {videosList.map(each => (
                    <VideoCard key={each.id} videoDetails={each} />
                  ))}
                </VideosListContainer>
              ) : (
                <NoVideoListContainer>
                  <NoVideoImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <CustomHeading activeDark={isDark}>
                    No Search result found
                  </CustomHeading>
                  <CustomDescribe activeDark={isDark}>
                    Try different key words or remove search
                  </CustomDescribe>
                  <TryButton onClick={this.onRetry}>Retry</TryButton>
                </NoVideoListContainer>
              )}
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }

  renderHomePage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListPage()
      case apiStatusConstants.failed:
        return this.renderFailedPage()
      case apiStatusConstants.inprogress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {banner, search} = this.state
    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer activeDark={isDark} data-testid="home">
                <BannerContainer bannerActive={banner}>
                  <BannerTextContainer>
                    <Logo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <CusText>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </CusText>
                    <BuyNowButton>GET IT NOW</BuyNowButton>
                  </BannerTextContainer>
                  <CloseButton onClick={this.onCloseBanner} data-testid="close">
                    <IoClose size={25} />
                  </CloseButton>
                </BannerContainer>
                <SearchContainer activeDark={isDark}>
                  <InputSearch
                    type="search"
                    activeDark={isDark}
                    value={search}
                    onChange={this.onchangeInput}
                    placeholder="Search"
                    bColor={isDark ? '#fff' : '#000'}
                  />
                  <SearchButton
                    type="button"
                    activeDark={isDark}
                    onClick={this.onSubmitSearch}
                  >
                    <FaSearch color={isDark ? '#434143' : '#94a3b8'} />
                  </SearchButton>
                </SearchContainer>
                {this.renderHomePage()}
              </HomeContainer>
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default Home
