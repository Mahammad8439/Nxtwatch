import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  display: flex;
  width: 100%;
  align-items: flex-start;
`
export const VideoLik = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
`
export const ThumbNail = styled.img`
  width: 45%;
  margin-right: 10px;
`
export const DescribeContainer = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
`
export const Describe = styled.h1`
  font-size: 20px;
  margin-top: 0;
  color: ${props => (props.activeDark ? '#ffff' : '#000')};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const SmallText = styled.p`
  font-size: 14px;
  color: ${props => (props.activeDark ? '#82909F' : '#B8BFC8')};
  margin-right: 10px;
  margin-top: 2px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`
export const DivSep = styled.div`
  display: flex;
`
