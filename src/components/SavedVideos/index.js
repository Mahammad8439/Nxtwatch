import {FaFire} from 'react-icons/fa'
import HeaderContext from '../../context/HeaderContext'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import SavedVideoCard from '../SavedVideoCard'

import {
  SavedIconContainer,
  SavedVideoContainer,
  SavedVideoHeadingCon,
  Heading,
  SavedVideoListContainer,
  NoSavedVideoImg,
  Describe,
  NoSavedContainer,
} from './savedVideoStyledComponent'

const SavedVideos = () => (
  <HeaderContext.Consumer>
    {value => {
      const {isDark, savedVideoList} = value

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedVideoContainer data-testid="savedVideos" activeDark={isDark}>
            {savedVideoList.length > 0 ? (
              <>
                <SavedVideoHeadingCon activeDark={isDark}>
                  <SavedIconContainer activeDark={isDark}>
                    <FaFire color="#ff0000" size={28} />
                  </SavedIconContainer>
                  <Heading activeDark={isDark}>Saved Videos</Heading>
                </SavedVideoHeadingCon>
                <SavedVideoListContainer>
                  {savedVideoList.map(each => (
                    <SavedVideoCard key={each.id} videoItem={each} />
                  ))}
                </SavedVideoListContainer>
              </>
            ) : (
              <NoSavedContainer>
                <NoSavedVideoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <Heading activeDark={isDark}>No saved videos found</Heading>
                <Describe activeDark={isDark}>
                  You can save your videos while watching them
                </Describe>
              </NoSavedContainer>
            )}
          </SavedVideoContainer>
        </>
      )
    }}
  </HeaderContext.Consumer>
)

export default SavedVideos
