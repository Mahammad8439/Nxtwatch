import styled from 'styled-components'
import {Link} from 'react-router-dom'

// eslint-disable-next-line import/prefer-default-export

export const Navigation = styled.div`
  display: flex;
`

export const NavigationItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 250px;
  height: 38px;
  padding-left: 20px;
  margin-top: 10px;
`
export const NavText = styled.p`
  font-size: 17px;
  margin-left: 20px;
  color: ${props => (props.activeDark ? ' #f1f1f1' : '#181818')};
  font-weight: 500;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const CustomText = styled.p`
  font-size: 20px;
  color: ${props => (props.activeDark ? '#ffff' : '#000000')};
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`
export const IconItem = styled.img`
  width: 28px;
  margin-right: 12px;
`
export const SideBarContainer = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  top: 60px;
  padding-bottom: 30px;
  background-color: ${props => (props.activeDark ? '#201F1C' : '#FFFFFC')};
  @media (max-width: 768px) {
    display: none;
  }
`
