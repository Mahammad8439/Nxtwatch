import {BsMoon} from 'react-icons/bs'
import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {IoSunnyOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import Cookies from 'js-cookie'

import {
  NavBar,
  Logo,
  DemoContainer,
  TransparentButton,
  Profile,
  OutlineButton,
  LogoutPopupContainer,
  CustomText,
  CustomButton,
  CloseButton,
  SmallDeviceButton,
  SmallDeviceNavBarContainer,
  CloseMark,
  NavigationItemContainers,
  NavLinks,
  NavTexts,
  ListItems,
} from './headerStyleComponent'

import HeaderContext from '../../context/HeaderContext'

const Header = props => (
  <HeaderContext.Consumer>
    {value => {
      const {
        isDark,
        onToggleTheme,

        onChangeActivePage,
      } = value

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

      const onChangeTheme = () => {
        onToggleTheme()
      }

      const onLogout = () => {
        const {history} = props
        history.replace('/')

        Cookies.remove('jwt_token')
      }

      const logoUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavBar activeDark={isDark}>
          <Logo src={logoUrl} alt="website logo" />
          <DemoContainer>
            <TransparentButton onClick={onChangeTheme} data-testid="theme">
              {isDark ? (
                <IoSunnyOutline size={25} color="#ffff" />
              ) : (
                <BsMoon size={25} />
              )}
            </TransparentButton>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <SmallDeviceButton>
                  <GiHamburgerMenu size={25} color={isDark ? '#fff' : '#000'} />
                </SmallDeviceButton>
              }
            >
              {close => (
                <SmallDeviceNavBarContainer activeDark={isDark}>
                  <CloseMark type="button" onClick={() => close()}>
                    <MdClose size={25} color={isDark ? '#ffff' : '#000'} />
                  </CloseMark>
                  <NavigationItemContainers>
                    <NavLinks to="/" onClick={onActiveTabHome}>
                      <ListItems
                        bgColor={activePage === 'Home' ? activeTabBg : 'none'}
                        activeDark={isDark}
                      >
                        <IoMdHome
                          color={activePage === 'Home' ? '#ff0000' : ' #909090'}
                          size={17}
                        />
                        <NavTexts activeDark={isDark}>Home</NavTexts>
                      </ListItems>
                    </NavLinks>
                    <NavLinks to="/trending" onClick={onActiveTabTrending}>
                      <ListItems
                        bgColor={
                          activePage === 'Trending' ? activeTabBg : 'none'
                        }
                        activeDark={isDark}
                      >
                        <HiFire
                          color={
                            activePage === 'Trending' ? '#ff0000' : ' #909090'
                          }
                          size={17}
                        />
                        <NavTexts activeDark={isDark}>Trending</NavTexts>
                      </ListItems>
                    </NavLinks>
                    <NavLinks to="/gaming" onClick={onActiveTabGaming}>
                      <ListItems
                        bgColor={activePage === 'Gaming' ? activeTabBg : 'none'}
                        activeDark={isDark}
                      >
                        <SiYoutubegaming
                          color={
                            activePage === 'Gaming' ? '#ff0000' : ' #909090'
                          }
                          size={17}
                        />
                        <NavTexts activeDark={isDark}>Gaming</NavTexts>
                      </ListItems>
                    </NavLinks>
                    <NavLinks to="/saved-videos" onClick={onActiveTabSaved}>
                      <ListItems
                        bgColor={activePage === 'Saved' ? activeTabBg : 'none'}
                        activeDark={isDark}
                      >
                        <CgPlayListAdd
                          color={
                            activePage === 'Saved' ? '#ff0000' : ' #909090'
                          }
                          size={17}
                        />
                        <NavTexts activeDark={isDark}>Saved Videos</NavTexts>
                      </ListItems>
                    </NavLinks>
                  </NavigationItemContainers>
                </SmallDeviceNavBarContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <OutlineButton activeDark={isDark}>Logout</OutlineButton>
              }
            >
              {close => (
                <LogoutPopupContainer activeDark={isDark}>
                  <CustomText activeDark={isDark}>
                    Are you sure, you want to logout
                  </CustomText>
                  <div>
                    <CloseButton
                      type="button"
                      activeDark={isDark}
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <CustomButton type="button" onClick={onLogout}>
                      Confirm
                    </CustomButton>
                  </div>
                </LogoutPopupContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <SmallDeviceButton>
                  <FiLogOut size={25} color={isDark ? '#fff' : '#000'} />
                </SmallDeviceButton>
              }
            >
              {close => (
                <LogoutPopupContainer activeDark={isDark}>
                  <CustomText activeDark={isDark}>
                    Are you sure you want to logout
                  </CustomText>
                  <div>
                    <CloseButton
                      type="button"
                      activeDark={isDark}
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <CustomButton type="button" onClick={onLogout}>
                      Confirm
                    </CustomButton>
                  </div>
                </LogoutPopupContainer>
              )}
            </Popup>
          </DemoContainer>
        </NavBar>
      )
    }}
  </HeaderContext.Consumer>
)

export default withRouter(Header)
