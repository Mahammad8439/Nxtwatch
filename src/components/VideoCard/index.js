import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemContainer,
  VideoLink,
  VideoImg,
  DetailsTextContainer,
  VideoTitle,
  VideoDetailsContainer,
  ChannelProfile,
  ChannelName,
  ViewsContainer,
} from './videoCardStyledComponent'

import HeaderContext from '../../context/HeaderContext'

const VideoCard = props => {
  const {videoDetails} = props

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDark} = value
        const {
          id,
          title,
          thumbnailUrl,
          viewCount,
          publishedDate,
          channel,
        } = videoDetails

        const {profileImageUrl, name} = channel

        const fromDate = formatDistanceToNow(new Date(publishedDate))

        const date = fromDate.split(' ')

        date.splice(0, 1)

        return (
          <VideoLink to={`/videos/${id}`}>
            <VideoItemContainer>
              <VideoImg src={thumbnailUrl} alt={id} />
              <VideoDetailsContainer>
                <ChannelProfile src={profileImageUrl} alt={name} />
                <DetailsTextContainer>
                  <VideoTitle activeDark={isDark}>{title}</VideoTitle>
                  <ChannelName activeDark={isDark}>{name}</ChannelName>
                  <ViewsContainer>
                    <ChannelName activeDark={isDark}>
                      {viewCount} views .
                    </ChannelName>
                    <ChannelName activeDark={isDark}> {date} ago</ChannelName>
                  </ViewsContainer>
                </DetailsTextContainer>
              </VideoDetailsContainer>
            </VideoItemContainer>
          </VideoLink>
        )
      }}
    </HeaderContext.Consumer>
  )
}
export default VideoCard
