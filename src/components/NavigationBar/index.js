import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import HeaderContext from '../../context/HeaderContext'

import {
  SideBarContainer,
  NavigationItemContainer,
  ListItem,
  NavText,
  NavLink,
  ContactContainer,
  CustomText,
  IconContainer,
  IconItem,
  Navigation,
} from './navigationBarStyleComponent'

const NavigationBar = props => (
  <HeaderContext.Consumer>
    {value => {
      const {isDark, onChangeActivePage} = value

      const onActiveTabHome = () => {
        onChangeActivePage('Home')
      }

      const onActiveTabTrending = () => {
        onChangeActivePage('Trending')
      }

      const onActiveTabGaming = () => {
        onChangeActivePage('Gaming')
      }

      const onActiveTabSaved = () => {
        onChangeActivePage('Saved')
      }

      let {activePage} = value

      let activeTabBg = isDark ? '#383838' : ' #d7dfe9'

      const {activeTab} = props

      activePage = activeTab === 'transparent' ? 'none' : activePage

      if (activeTab === 'transparent') {
        activeTabBg = 'transparent'
      }

      return (
        <Navigation>
          <SideBarContainer activeDark={isDark}>
            <NavigationItemContainer>
              <NavLink to="/" onClick={onActiveTabHome}>
                <ListItem
                  bgColor={activePage === 'Home' ? activeTabBg : 'none'}
                  activeDark={isDark}
                >
                  <IoMdHome
                    color={activePage === 'Home' ? '#ff0000' : ' #909090'}
                    size={17}
                  />
                  <NavText activeDark={isDark}>Home</NavText>
                </ListItem>
              </NavLink>
              <NavLink to="/trending" onClick={onActiveTabTrending}>
                <ListItem
                  bgColor={activePage === 'Trending' ? activeTabBg : 'none'}
                  activeDark={isDark}
                >
                  <HiFire
                    color={activePage === 'Trending' ? '#ff0000' : ' #909090'}
                    size={17}
                  />
                  <NavText activeDark={isDark}>Trending</NavText>
                </ListItem>
              </NavLink>
              <NavLink to="/Gaming" onClick={onActiveTabGaming}>
                <ListItem
                  bgColor={activePage === 'Gaming' ? activeTabBg : 'none'}
                  activeDark={isDark}
                >
                  <SiYoutubegaming
                    color={activePage === 'Gaming' ? '#ff0000' : ' #909090'}
                    size={17}
                  />
                  <NavText activeDark={isDark}>Gaming</NavText>
                </ListItem>
              </NavLink>
              <NavLink to="/saved-videos" onClick={onActiveTabSaved}>
                <ListItem
                  bgColor={activePage === 'Saved' ? activeTabBg : 'none'}
                  activeDark={isDark}
                >
                  <CgPlayListAdd
                    color={activePage === 'Saved' ? '#ff0000' : ' #909090'}
                    size={17}
                  />
                  <NavText activeDark={isDark}>Saved Videos</NavText>
                </ListItem>
              </NavLink>
            </NavigationItemContainer>
            <ContactContainer>
              <CustomText activeDark={isDark}>CONTACT US</CustomText>
              <IconContainer>
                <IconItem
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                  alt="facebook logo"
                />
                <IconItem
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                  alt="twitter logo"
                />
                <IconItem
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                  alt="linked in logo"
                />
              </IconContainer>
              <CustomText activeDark={isDark}>
                Enjoy! Now to see your channels and recommendations!
              </CustomText>
            </ContactContainer>
          </SideBarContainer>
        </Navigation>
      )
    }}
  </HeaderContext.Consumer>
)

export default NavigationBar
