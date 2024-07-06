import styled from 'styled-components'
import {Link} from 'react-router-dom'

// eslint-disable-next-line import/prefer-default-export
export const VideoItemContainer = styled.li`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const VideoLink = styled(Link)`
  text-decoration: none;
  margin-right: 40px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
`
export const VideoImg = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  margin-left: 20px;
`
export const ChannelProfile = styled.img`
  width: 30px;
  margin-right: 8px;
  margin-top: 12px;
`

export const DetailsTextContainer = styled.div`
  margin-left: 2px;
`
export const VideoTitle = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  font-family: 'Roboto';
  color: ${props => (props.activeDark ? '#ffff' : '#000')};
`
export const ChannelName = styled.p`
  font-size: 8px;
  margin-right: 5px;
  margin-top: 0;
  color: ${props => (props.activeDark ? '#909090' : ' #606060')};
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
