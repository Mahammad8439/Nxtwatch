import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavBar = styled.nav`
  top: 0;
  position: fixed;
  width: 100%;
  display: flex;
  padding: 20px 20px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.activeDark ? '#201F1C' : '#ffff')};
`
export const Logo = styled.img`
  width: 120px;
`
export const DemoContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const TransparentButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

export const Profile = styled.img`
  width: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const OutlineButton = styled.button`
  background-color: transparent;
  padding: 5px;
  border: 1px solid ${props => (props.activeDark ? '#ffff' : '#4f46e5')};
  outline: none;
  cursor: pointer;
  width: 80px;
  border-radius: 5px;
  color: ${props => (props.activeDark ? '#ffff' : '#4f46e5')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutPopupContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  background-color: ${props => (props.activeDark ? '#212121' : '#FFF')};
  border-radius: 8px;
  padding: 50px 30px;
`
export const CustomText = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => (props.activeDark ? '#fff' : '#000')};
`
export const CustomButton = styled.button`
  background-color: #2082f2;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: #ffff;
  font-size: 15px;
  margin-left: 15px;
  width: 80px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border: 1px solid ${props => (props.activeDark ? '#ffff' : '#4f46e5')};
  outline: none;
  cursor: pointer;
  width: 80px;
  font-size: 15px;
  border-radius: 5px;
  color: ${props => (props.activeDark ? '#ffff' : '#4f46e5')};
`

export const SmallDeviceButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 769px) {
    display: none;
  }
`
export const SmallDeviceNavBarContainer = styled.div`
  background-color: ${props => (props.activeDark ? '#212121' : '#ffff')};
  width: 476px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const CloseMark = styled.button`
  margin: 20px;
  margin-right: 100px;
  background: transparent;
  outline: none;
  cursor: pointer;
  width: 30px;
  border: none;
  align-self: flex-end;
`

export const NavigationItemContainers = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
`
export const NavLinks = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const ListItems = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 250px;
  height: 38px;
  padding-left: 20px;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const NavTexts = styled.p`
  font-size: 17px;
  margin-left: 20px;
  color: ${props => (props.activeDark ? ' #f1f1f1' : '#181818')};
  font-weight: 500;
`
export const TabButton = styled.button`
  background: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`
