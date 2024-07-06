import styled from 'styled-components'

export const TrendingContainer = styled.div`
  min-height: 100vh;
  margin-left: 250px;
  margin-top: 70px;
  min-height: 100vh;
  padding: 0;
  background-color: ${props => (props.activeDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    margin: 0;
  }
`
export const TrendingHeadingContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.activeDark ? '#181818' : '#F1F1F1')};
  display: flex;
  align-items: center;
  padding: 30px;
`
export const IconContainer = styled.div`
  width: 80px;
  padding: 20px;
  margin-right: 20px;
  background-color: ${props => (props.activeDark ? '#0F0F0F' : '#E1E9F0')};
  border-radius: 50px;
`
export const MainHeading = styled.h1`
  color: ${props => (props.activeDark ? '#ffff' : '#0F0F0F')};
  font-size: 30px;
`
export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const TrendingListContainer = styled.ul`
  margin-left: 0;
  list-style-type: none;
  margin-top: 20px;
  width: 80%;
  padding-left: 50px;
  @media screen and (max-width: 567px) {
    width: 100%;
    margin-left: 0;
    padding-left: 0;
  }
`
