import {formatDistanceToNow} from 'date-fns'

import {
  VideoListItem,
  VideoLik,
  ThumbNail,
  DescribeContainer,
  Describe,
  SmallText,
  DivSep,
} from './savedVideoItemStyle'

import HeaderContext from '../../context/HeaderContext'

const SavedVideoCard = props => {
  const {videoItem} = props
  const {
    channel,
    title,

    publishedDate,
    thumbnailUrl,
    viewsCount,
    id,
  } = videoItem

  const {name} = channel

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDark} = value

        const date = formatDistanceToNow(new Date(publishedDate))

        return (
          <VideoLik to={`/videos/${id}`}>
            <VideoListItem>
              <ThumbNail src={thumbnailUrl} alt={id} />
              <DescribeContainer>
                <Describe activeDark={isDark}>{title}</Describe>
                <SmallText activeDark={isDark}>{name}</SmallText>
                <DivSep>
                  <SmallText activeDark={isDark}>{viewsCount} Views</SmallText>
                  <SmallText activeDark={isDark}>{date}</SmallText>
                </DivSep>
              </DescribeContainer>
            </VideoListItem>
          </VideoLik>
        )
      }}
    </HeaderContext.Consumer>
  )
}

export default SavedVideoCard
