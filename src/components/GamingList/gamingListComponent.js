import styled from 'styled-components'

export const GamingListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-right: 15px;
  margin-bottom: 15px;
  @media screen and (max-width: 576px) {
    width: 40%;
  }
`
export const ThumbnailImg = styled.img`
  width: 100%;
`
export const Title = styled.p`
  font-size: 20px;
  color: ${props => (props.activeDark ? '#ffff' : '#000000')};
`
export const Views = styled.p`
  font-size: 16px;
  color: ${props => (props.activeDark ? '#586773' : '#586773')};
  margin-top: 0;
`
