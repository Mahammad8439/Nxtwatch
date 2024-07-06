import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {CgPlayListAdd} from 'react-icons/cg'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import HeaderContext from '../../context/HeaderContext'

import {
  VideoDetailsContainer,
  LoaderCon,
  VideoViewContainer,
  VideoTitle,
  DivContainer,
  ViewsAndDateContainer,
  CustomButton,
  Text,
  DividerLine,
  ChannelDetailsContainer,
  ChannelProfile,
  VideoTitleText,
  ChannelName,
  ChannelDive2,
  Views,
} from './videoDetailsStyleComponent'

import Header from '../Header'
import NavigationBar from '../NavigationBar'

class VideoDetails extends Component {
  state = {apiStatus: 'INITIAL', videoDetail: {}, liked: false, disLike: false}

  componentDidMount() {
    this.getVideoDetails()
  }

  renderLoader = () => (
    <LoaderCon data-testid="loader">
      <Loader type="ThreeDots" color=" #3b82f6" />
    </LoaderCon>
  )

  onClickLike = () => {
    this.setState(prev => ({liked: !prev.liked, disLike: false}))
  }

  onClickDislike = () => {
    this.setState(prev => ({disLike: !prev.disLike, liked: false}))
  }

  renderVideoViewPage = () => {
    const {videoDetail} = this.state

    const {
      videoUrl,
      title,
      viewsCount,
      publishedDate,
      channel,
      description,
    } = videoDetail

    const {profileImageUrl, name, subscribeCount} = channel

    const date = formatDistanceToNow(new Date(publishedDate))

    const changeDate = date.split(' ')
    changeDate.splice(0, 1)

    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDark, addSavedVideo, savedVideoList} = value

          const find = savedVideoList.find(each => each.id === videoDetail.id)

          const {liked, disLike} = this.state

          const addItemToSavedList = () => {
            addSavedVideo(videoDetail)
          }

          return (
            <VideoViewContainer>
              <ReactPlayer url={videoUrl} controls width="100%" />
              <VideoTitle activeDark={isDark}>{title}</VideoTitle>
              <DivContainer activeDark={isDark}>
                <ViewsAndDateContainer widthCo="220px">
                  <Text>{viewsCount} views</Text>
                  <Text>{changeDate.join(' ')} ago</Text>
                </ViewsAndDateContainer>
                <ViewsAndDateContainer widthCo="250px">
                  <CustomButton onClick={this.onClickLike}>
                    <AiOutlineLike
                      size={16}
                      color={liked ? '#4f46e5' : ' #64748b'}
                    />
                    <Text isLiked={liked}>Like</Text>
                  </CustomButton>
                  <CustomButton onClick={this.onClickDislike}>
                    <AiOutlineDislike
                      size={16}
                      color={disLike ? '#4f46e5' : ' #64748b'}
                    />
                    <Text isLiked={disLike}>DisLike</Text>
                  </CustomButton>
                  <CustomButton onClick={addItemToSavedList}>
                    <CgPlayListAdd
                      size={16}
                      color={find ? '#4f46e5' : '#64748b'}
                    />
                    <Text isLiked={find}>{find ? 'Saved' : 'Save'}</Text>
                  </CustomButton>
                </ViewsAndDateContainer>
              </DivContainer>
              <DividerLine />
              <ChannelDetailsContainer>
                <ChannelProfile src={profileImageUrl} alt={name} />
                <ChannelDive2>
                  <ChannelName activeDark={isDark}>{name}</ChannelName>
                  <Views>{subscribeCount} Subscribers</Views>
                  <VideoTitleText activeDark={isDark}>
                    {description}
                  </VideoTitleText>
                </ChannelDive2>
              </ChannelDetailsContainer>
            </VideoViewContainer>
          )
        }}
      </HeaderContext.Consumer>
    )
  }

  getResult = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'INPROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderVideoViewPage()

      default:
        return ''
    }
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: 'INPROGRESS'})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updateData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscribeCount: fetchedData.video_details.channel.subscriber_count,
        },
        viewsCount: fetchedData.video_details.view_count,
        publishedDate: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }

      this.setState({apiStatus: 'SUCCESS', videoDetail: updateData})
    }
  }

  render() {
    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header activeTab="transparent" />
              <NavigationBar activeTab="transparent" />
              <VideoDetailsContainer activeDark={isDark}>
                {this.getResult()}
              </VideoDetailsContainer>
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default VideoDetails
