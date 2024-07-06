import {formatDistanceToNow} from 'date-fns'
import HeaderContext from '../../context/HeaderContext'

import {
  ThumbnailImg,
  TrendingListItem,
  VideosLink,
  ChannelName,
  CustomHeading,
  VideoDetailContainer,
  Div2,
  Dates,
} from './trendingListStyledComponent'

const TrendingList = props => (
  <HeaderContext.Consumer>
    {value => {
      const {isDark} = value

      const {videosItem} = props

      const {
        id,
        publishedAt,
        title,
        channel,
        thumbnailUrl,
        viewsCount,
      } = videosItem
      const {name, profileImgUrl} = channel

      const date = formatDistanceToNow(new Date(publishedAt))

      const toArray = date.split(' ')

      toArray.splice(0, 1)

      return (
        <VideosLink to={`/videos/${id}`}>
          <TrendingListItem>
            <ThumbnailImg src={thumbnailUrl} alt={name} />
            <VideoDetailContainer>
              <CustomHeading activeDark={isDark}>{title}</CustomHeading>
              <ChannelName activeDark={isDark}>{name}</ChannelName>
              <Div2>
                <Dates activeDark={isDark}>{viewsCount} views</Dates>
                <Dates activeDark={isDark}>{toArray.join(' ')} ago</Dates>
              </Div2>
            </VideoDetailContainer>
          </TrendingListItem>
        </VideosLink>
      )
    }}
  </HeaderContext.Consumer>
)

export default TrendingList
