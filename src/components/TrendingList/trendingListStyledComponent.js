import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const TrendingListItem = styled.li`
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`
export const ThumbnailImg = styled.img`
  width: 300px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0;
  }
`
export const VideosLink = styled(Link)`
  text-decoration: none;
  margin-right: 40px;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    margin-right: 0;
  }
`
export const VideoDetailContainer = styled.div`
  width: 300px;
  margin-left: 10px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const CustomHeading = styled.h1`
  color: ${props => (props.activeDark ? '#ffff' : '#000')};
  font-size: 20px;
  margin-top: 0;
`
export const ChannelName = styled.p`
  color: ${props => (props.activeDark ? '#6E7178' : '#6D7880')};
  font-size: 15px;
`
export const Div2 = styled.div`
  display: flex;
`
export const Dates = styled.p`
  color: ${props => (props.activeDark ? '#6E7178' : '#6D7880')};
  font-size: 15px;
  margin-right: 10px;
  margin-top: 0;
`
