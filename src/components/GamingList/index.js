import HeaderContext from '../../context/HeaderContext'

import {GamingListItem, ThumbnailImg, Title, Views} from './gamingListComponent'

const GamingList = props => (
  <HeaderContext.Consumer>
    {value => {
      const {isDark} = value

      const {item} = props
      const {id, title, thumbnailUrl, viewsCount} = item

      console.log(viewsCount)

      return (
        <GamingListItem>
          <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
          <Title activeDark={isDark}>{title}</Title>
          <Views activeDark={isDark}>{viewsCount} Watching Worldwide</Views>
        </GamingListItem>
      )
    }}
  </HeaderContext.Consumer>
)

export default GamingList
